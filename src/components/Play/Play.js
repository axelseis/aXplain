import Component from '../../lib/Component.js'
import { dispatchAction } from '../../lib/store.js'
import { ShowHide } from '../../lib/Mixins.js'
import { addClass, removeClass, hasClass } from '../../lib/utils.js'
import { getMousePosition, getOffset, getDOMElementIndex } from '../utils.js'
import { actions, getRiders } from './actions.js'

const INIT_DRAG_ITEM_CLASS = 'initdragitem';
const DRAG_CLASS = 'ondrag';
const DROP_CLASS = 'dropholder'
const BET_ITEMS_NUMBER = 15;

export default class Riders extends ShowHide(Component) {

    constructor(className) {
        super(className);
 
        this.mousePosition = {};

        this.dropHolderItem = null;
        this.onDragItemInitPosition = null;
        this.listItemOnDrag = null;
        this.betItemOnDrag = null;

        document.addEventListener('mouseup', this.onMouseUp.bind(this))
        document.addEventListener('touchend', this.onMouseUp.bind(this))
        window.addEventListener('resize', this.checkResolution.bind(this))
        this.$clip.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.$clip.addEventListener('touchmove', this.onMouseMove.bind(this))
        this.$clip.addEventListener('touchstart', this.onMouseMove.bind(this))

        this.checkResolution();
        getRiders();
    }

    onMouseMove(ev){
        this.mousePosition = getMousePosition(ev)
    }

    stateToprops(state) {
        return {
            bet: [...state.user.bets[state.season.actEvent]],
            riders: { ...state.riders },
            actEvent: {...state.events[state.season.actEvent]}
        };
    }

    checkResolution(ev) {
        const betDiv = this.$clip.querySelector(`.Play__bet`);
        if(this.isListMode()){
            addClass(this.$clip, 'list-mode')
        }
        else {
            removeClass(this.$clip, 'list-mode')
        }
        if((betDiv && this.isListMode()) || (!this.isListMode() && !betDiv)){
            this.forceRender();
        }
    }

    isListMode(){
        return getOffset(this.$clip).width <= 480;
    }

    onMouseDownItem(ev){
        const propsHandler = ev.touches ? ev.touches[0] : ev;
        if(hasClass(propsHandler.target.parentNode,'Play__list') 
            && propsHandler.clientX > getOffset(propsHandler.target).left + 50){
        }
        else {
            ev.preventDefault();

            if(this.isListMode()){
                this.onMouseDownListItem(ev)
            }
            else {
                this.onMouseDownBetItem(ev);
            }
        }
    }

    onMouseDownListItem(ev) {
        this.listItemOnDrag = ev.target;
        addClass(this.listItemOnDrag, DRAG_CLASS);
        
        this.setInitDragItem(this.listItemOnDrag.nextElementSibling)
        this.setDropHolderItem(this.onDragItemInitPosition)
        this.$clip.appendChild(this.listItemOnDrag);

        this.dragListItem(ev.offsetY || getOffset(ev.target).height/2);
    }

    onMouseDownBetItem(ev) {
        this.betItemOnDrag = ev.target;
        addClass(this.betItemOnDrag, DRAG_CLASS);

        this.setInitDragItem(this.betItemOnDrag.parentNode)
        this.setDropHolderItem(this.betItemOnDrag.parentNode)
        this.$clip.appendChild(this.betItemOnDrag);

        this.dragBetItem(ev.offsetY);
    }

    onMouseUp(ev) {
        const dropItem = this.dropHolderItem
        
        if(this.listItemOnDrag){
            const riderId = parseInt(this.listItemOnDrag.getAttribute('riderId'))
            const newPos = this.isListMode() ? getDOMElementIndex(dropItem) : null
            
            this.listItemOnDrag.removeAttribute('style')
            dropItem.parentNode.insertBefore(this.listItemOnDrag, dropItem)
            
            if(newPos === this.props.bet.indexOf(riderId)){
                this.forceRender();
            }
            if(newPos <= BET_ITEMS_NUMBER){
                dispatchAction(actions.SET_BET_ITEM, {
                    riderId: riderId,
                    position: newPos,
                    insertRider: this.isListMode()
                })
            }
            else {
                this.forceRender();
            }
            
            this.listItemOnDrag = null;
        }
        if(this.betItemOnDrag){
            const newPos = dropItem ? parseInt(dropItem.getAttribute('position')) : null;
            const riderId = parseInt(this.betItemOnDrag.getAttribute('riderId'));
            if(!newPos || newPos === this.props.bet.indexOf(riderId)){
                this.forceRender();
            }
            dispatchAction(actions.SET_BET_ITEM, {
                riderId: newPos ? riderId : null,
                position: newPos || this.props.bet.indexOf(riderId)
            })
            this.betItemOnDrag = null;
        }

        this.setDropHolderItem();
    }

    setDropHolderItem(item){
        if(this.dropHolderItem){
            removeClass(this.dropHolderItem, DROP_CLASS)
            this.dropHolderItem = null;
        }
        if(item){
            addClass(item, DROP_CLASS);
            this.dropHolderItem = item;
        }
    }

    setInitDragItem(item){
        if(this.onDragItemInitPosition){
            removeClass(this.onDragItemInitPosition, INIT_DRAG_ITEM_CLASS)
            this.onDragItemInitPosition = null;
        }
        if(item){
            this.onDragItemInitPosition = item
            addClass(item, INIT_DRAG_ITEM_CLASS);
        }
    }

    dragListItem(initY) {
        if(this.listItemOnDrag){
            const listDiv = this.$clip.querySelector(`.Play__list`);
            const itemToDrop = Array.from(listDiv.children).find((item) => {
                return (
                    item.offsetTop + (parseInt(getComputedStyle(item).height)/2) - this.$clip.parentNode.scrollTop > this.mousePosition.top
                )
            });

            if(itemToDrop && getDOMElementIndex( itemToDrop ) < BET_ITEMS_NUMBER ){
                this.setDropHolderItem(itemToDrop);    
            }    
            else {
                this.setDropHolderItem(this.onDragItemInitPosition);    
            }
            this.listItemOnDrag.style.top = (this.mousePosition.top + this.$clip.parentNode.scrollTop - initY) + 'px';

            if(!this.isListMode()){
                this.listItemOnDrag.style.left = this.mousePosition.left + 'px';
            }

            requestAnimationFrame(this.dragListItem.bind(this, initY))
        }
    }


    dragBetItem() {
        if(this.betItemOnDrag){
            const betItems = this.$clip.querySelector(`.Play__bet`).children;
            const itemToDrop = Array.from(betItems).find((item) => {
                return (
                    item.offsetTop+(parseInt(getComputedStyle(item).height)) > this.mousePosition.top
                    && item.offsetLeft+(parseInt(getComputedStyle(item).width)) > this.mousePosition.left
                )
            });

            this.setDropHolderItem(itemToDrop);
            
                if(hasClass(this.onDragItemInitPosition.parentNode,'Play__bet')){
                    Array.from(this.onDragItemInitPosition.getElementsByClassName('Play__rider')).forEach(element => {
                        this.onDragItemInitPosition.removeChild(element)
                    })
                    if(this.dropHolderItem && this.dropHolderItem !== this.onDragItemInitPosition){
                        const dropRider = this.dropHolderItem.getElementsByClassName('Play__rider')[0];
    
                        if(dropRider){
                            this.onDragItemInitPosition.appendChild(dropRider.cloneNode(true))
                        }
                    }
                }

            this.betItemOnDrag.style.top = this.mousePosition.top + this.$clip.parentNode.scrollTop + 'px';
            this.betItemOnDrag.style.left = this.mousePosition.left + 'px';

            requestAnimationFrame(this.dragBetItem.bind(this))
        }
    }

    render() {
        const ridersList = [
            ...this.props.bet.filter(riderId => !!riderId),
            ...Object.keys(this.props.riders).filter(
                riderId => this.props.bet.indexOf(parseInt(riderId)) === -1
            )
        ]

        return (`
            <div class="Play__list">
                ${ridersList.map((riderId, index) => {
                    if(this.isListMode() || this.props.bet.indexOf(parseInt(riderId)) === -1){
                        return riderTpl(riderId, this.props.riders[riderId])
                    }
                }).join('')}
            </div>
            ${ !this.isListMode() ? 
                `<div class="Play__bet">
                    ${this.props.bet.map((riderId,position) => {
                        return betItemTpl(position, riderId, this.props.riders[riderId] || {})
                    }).join('')}
                </div>` : `<div class="Play__bet-mobile">
                    ${ridersList.map((riderId,position) => {
                        return betItemMobileTpl(position)
                    }).join('')}
            </div>`
            }
        `)
    }
}

const listItemTpl = (index, riderId, riderData) => (`
    <div class="Play__list-item" riderId="${riderId}">
        <div class="list-item__index">${index}</div>
        ${ riderTpl(riderId, riderData) }
    </div>
`)

const betItemTpl = (position, riderId, riderData) => (`
    <div class="Play__bet-item" position="${position}">
        ${position+1}
        ${ riderTpl(riderId, riderData) }
    </div>
`)

const betItemMobileTpl = (position) => (`
    <div class="Play__bet-mobile-item">
        ${ position < BET_ITEMS_NUMBER ? position+1 : '' }
    </div>
`)

const riderTpl = (riderId, riderData) => (`
    ${ riderId && riderData ?
        `<div class="Play__rider" riderId="${riderId}"
            onmousedown="onMouseDownItem"
            ontouchstart="onMouseDownItem"
        >
            ${riderData.surname} ${riderData.name}
        </div>` : ''
    }
`)

