import Component from '../../lib/Component.js'
import { dispatchAction } from '../../lib/store.js'
import { ShowHide } from '../../lib/Mixins.js'
import { addClass, removeClass, hasClass } from '../../lib/utils.js'
import { getMousePosition, getOffset, getDOMElementIndex } from '../utils.js'
import { actions, getRiders } from './actions.js'

const INIT_DRAG_ITEM_CLASS = 'initdragitem';
const DRAG_CLASS = 'ondrag';
const DROP_CLASS = 'dropholder'
const REMOVE_DROP_CLASS = 'removedrop'
const BET_ITEMS_NUMBER = 15;
const LIST_ITEM_HEIGHT = 40;
export default class Riders extends ShowHide(Component) {

    constructor(className) {
        super(className);

        this.mousePosition = {};

        this.dropHolderItem = null;
        this.onDragItemInitPosition = null;
        this.itemOnDrag = null;

        document.addEventListener('mouseup', this.onMouseUp.bind(this))
        document.addEventListener('touchend', this.onMouseUp.bind(this))
        window.addEventListener('resize', this.checkResolution.bind(this))
        this.$clip.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.$clip.addEventListener('touchmove', this.onMouseMove.bind(this))
        this.$clip.addEventListener('touchstart', this.onMouseMove.bind(this))

        this.checkResolution();
        getRiders();
    }

    onMouseMove(ev) {
        this.mousePosition = getMousePosition(ev)
    }

    stateToprops(state) {
        const newBet = [...state.user.bets[state.season.actEvent]]
        const { actOrder, initOrder } = { ...state.ridersOrders }
        
        while (newBet.length < 15){
            newBet[newBet.length] = null
        } 

        return {
            bet: newBet,
            riders: { ...state.riders },
            actOrder: actOrder || initOrder,
            actEvent: { ...state.events[state.season.actEvent] }
        };
    }

    checkResolution(ev) {
        const betDiv = this.$clip.querySelector(`.Play__bet`);
        if (this.isListMode()) {
            addClass(this.$clip, 'list-mode')
        }
        else {
            removeClass(this.$clip, 'list-mode')
        }
        if ((betDiv && this.isListMode()) || (!this.isListMode() && !betDiv)) {
            this.forceRender();
        }
    }

    isListMode() {
        return getOffset(this.$clip).width <= 480;
    }

    onMouseDownItem(ev) {
        const propsHandler = ev.touches ? ev.touches[0] : ev;
        if (hasClass(propsHandler.target, 'rider__drag')) {
            ev.preventDefault();
            const riderSel = propsHandler.target.parentNode;

            if (this.isListMode()) {
                this.onMouseDownListMode(riderSel)
            }
            else {
                this.onMouseDownBetMode(riderSel, propsHandler.offsetY);
            }
        }
    }

    onMouseDownListMode(riderElement, offsetY) {
        this.setItemOnDrag(riderElement)

        this.setInitDragItem(this.itemOnDrag.nextElementSibling)
        this.setDropHolderItem(this.onDragItemInitPosition)
        this.$clip.appendChild(this.itemOnDrag);

        this.dragListItem(offsetY || getOffset(riderElement).height / 2);
    }

    onMouseDownBetMode(riderElement, offsetY) {
        
        let initItemDrag = riderElement.parentNode;
        if(hasClass(riderElement.parentNode, 'Play__list')){
            initItemDrag = riderElement.nextElementSibling;
        }
        this.setInitDragItem(initItemDrag)
        this.setDropHolderItem(this.onDragItemInitPosition)
        this.setItemOnDrag(riderElement)
        this.$clip.appendChild(riderElement);

        this.dragBetItem(offsetY);
    }

    onMouseUp(ev) {
        const dropItem = this.dropHolderItem
        const dragItem = this.itemOnDrag;

        if (!dragItem) {
            return;
        }

        const riderId = parseInt(dragItem.getAttribute('riderId'))
        const newPos = getDOMElementIndex(dropItem);

        let newBet = [...this.props.bet];
        let oldPos = newBet.indexOf(riderId);

        if (this.isListMode()) {
            newBet = newBet.filter(betItem => !!betItem)
            while (newBet.length < BET_ITEMS_NUMBER) {
                newBet.push(this.props.actOrder.shift())
            }

            if (dropItem) {
                dropItem.parentNode.insertBefore(dragItem, dropItem)
                oldPos = newBet.indexOf(riderId);
                    newBet.splice(oldPos, 1)
                    if(newPos < BET_ITEMS_NUMBER) newBet.splice(newPos, 0, riderId)
            }
            else {
                document.querySelector('.Play__list').appendChild(dragItem)
            }
        }

        else {
            if (dropItem) {
                dropItem.appendChild(dragItem)
            }
            else if(this.onDragItemInitPosition) {
                if(newPos !== null || oldPos === -1) {
                    this.onDragItemInitPosition.parentNode.insertBefore(dragItem, this.onDragItemInitPosition)
                }
                else {
                    const listDiv = document.querySelector('.Play__list');
                    listDiv.insertBefore(dragItem, listDiv.children[0])
                }
            }

            oldPos = newBet.indexOf(riderId);

            newBet[oldPos] = newBet[newPos];
            newBet[newPos] = riderId
        }

        const cleanBet = newBet.filter(riderId => !!riderId);
        const restRiders = this.props.actOrder.filter(
            riderId => newBet.indexOf(riderId) === -1
        )
        const newRidersOrder = [...cleanBet, ...restRiders]

        dispatchAction(actions.SET_BET, {
            bet: newBet,
            ridersOrder: newRidersOrder
        })

        this.setItemOnDrag(null);
        this.setDropHolderItem(null);
        this.setInitDragItem(null)
    }

    setItemOnDrag(item) {
        if (this.itemOnDrag) {
            this.itemOnDrag.removeAttribute('style');
            removeClass(this.itemOnDrag, DRAG_CLASS)
            this.itemOnDrag = null;
        }
        if (item) {
            addClass(item, DRAG_CLASS);
            this.itemOnDrag = item;
        }
    }

    setDropHolderItem(item) {
        if (this.dropHolderItem) {
            removeClass(this.dropHolderItem, DROP_CLASS)
            this.dropHolderItem = null;
        }
        if (item) {
            addClass(item, DROP_CLASS);
            this.dropHolderItem = item;
        }
    }

    setInitDragItem(item) {
        if (this.onDragItemInitPosition) {
            removeClass(this.onDragItemInitPosition, INIT_DRAG_ITEM_CLASS)
            this.onDragItemInitPosition = null;
        }
        if (item) {
            this.onDragItemInitPosition = item
            addClass(item, INIT_DRAG_ITEM_CLASS);
        }
    }

    dragListItem(initY) {
        if (this.itemOnDrag) {
            const listDiv = this.$clip.querySelector(`.Play__list`);
            const itemToDrop = Array.from(listDiv.children).find((item) => {
                return (
                    item.offsetTop + (parseInt(getComputedStyle(item).height) / 2) - this.$clip.parentNode.scrollTop > this.mousePosition.top
                )
            });

            if (itemToDrop && getDOMElementIndex(itemToDrop) < BET_ITEMS_NUMBER) {
                this.setDropHolderItem(itemToDrop);
            }
            else {
                this.setDropHolderItem(this.onDragItemInitPosition);
            }
            this.itemOnDrag.style.top = (this.mousePosition.top + this.$clip.parentNode.scrollTop - initY) + 'px';

            if (!this.isListMode()) {
                this.itemOnDrag.style.left = this.mousePosition.left + 'px';
            }
            else {
                const maxScroll = getOffset(this.$clip.parentNode).height + LIST_ITEM_HEIGHT;
                const initBottomScrollY = (getOffset(this.$clip).height - LIST_ITEM_HEIGHT);

                if (this.mousePosition.top < LIST_ITEM_HEIGHT) {
                    this.$clip.parentNode.scrollTop -= Math.floor((LIST_ITEM_HEIGHT - this.mousePosition.top) / 4);
                }
                else if (this.mousePosition.top > getOffset(this.$clip).height - LIST_ITEM_HEIGHT) {
                    this.$clip.parentNode.scrollTop = Math.min(maxScroll,
                        this.$clip.parentNode.scrollTop + Math.floor((this.mousePosition.top - initBottomScrollY) / 4)
                    );
                }
            }

            requestAnimationFrame(this.dragListItem.bind(this, initY))
        }
    }

    dragBetItem() {
        if (this.itemOnDrag) {
            const mouseLeft = this.mousePosition.left + this.$clip.parentNode.scrollLeft
            const listDiv = this.$clip.querySelector('.Play__list');
            const betDiv = this.$clip.querySelector('.Play__bet');
            const betItems = betDiv.children;
            const itemToDrop = Array.from(betItems).find((item) => {
                return (
                    item.offsetTop + (parseInt(getComputedStyle(item).height)) > this.mousePosition.top
                    && item.offsetLeft + (parseInt(getComputedStyle(item).width)) > this.mousePosition.left
                )
            });

            this.setDropHolderItem(itemToDrop);
            
            if (this.onDragItemInitPosition && hasClass(this.onDragItemInitPosition.parentNode, 'Play__bet')) {
                Array.from(this.onDragItemInitPosition.getElementsByClassName('Play__rider')).forEach(element => {
                    this.onDragItemInitPosition.removeChild(element)
                })
                
                removeClass(listDiv,REMOVE_DROP_CLASS)

                if (this.dropHolderItem && this.dropHolderItem !== this.onDragItemInitPosition) {
                    const dropRider = this.dropHolderItem.getElementsByClassName('Play__rider')[0];

                    if (dropRider) {
                        this.onDragItemInitPosition.appendChild(dropRider.cloneNode(true))
                    }
                }
                else if(mouseLeft > getOffset(betDiv).width) {
                    addClass(listDiv,REMOVE_DROP_CLASS)
                }
            }

            this.itemOnDrag.style.top = this.mousePosition.top + this.$clip.parentNode.scrollTop + 'px';
            this.itemOnDrag.style.left = mouseLeft + 'px';

            requestAnimationFrame(this.dragBetItem.bind(this))
        }
    }

    render() {
        const ridersList = this.props.actOrder;
        const bet = this.props.bet;

        return (`
            <div class="Play__list">
                ${ridersList.map((riderId, index) => {
                if (this.isListMode() || bet.indexOf(parseInt(riderId)) === -1) {
                    return riderTpl(riderId, this.props.riders[riderId])
                }
            }).join('')}
            </div>
            ${ !this.isListMode() ?
                `<div class="Play__bet">
                    ${bet.map((riderId, position) => {
                    return betItemTpl(position, riderId, this.props.riders[riderId] || {})
                }).join('')}
                </div>` : `<div class="Play__bet-mobile">
                    ${ridersList.map((riderId, position) => {
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
        ${ riderTpl(riderId, riderData)}
    </div>
`)

const betItemTpl = (position, riderId, riderData) => (`
    <div class="Play__bet-item" position="${position}">
        <div class="bet__position">
            ${position + 1}
        </div>
        ${ riderTpl(riderId, riderData)}
    </div>
`)

const betItemMobileTpl = (position) => (`
    <div class="Play__bet-mobile-item">
        <div class="bet__position">
            ${ position < BET_ITEMS_NUMBER ? position + 1 : ''}
        </div>
    </div>
`)

const riderTpl = (riderId, riderData) => (`
    ${ riderId && riderData ?
        `<div class="Play__rider" riderId="${riderId}"
            onmousedown="onMouseDownItem"
            ontouchstart="onMouseDownItem"
        >
        <div class="rider__drag">
            &nbsp;
        </div>
        <div class="rider__name">
            ${riderData.surname} ${riderData.name}
        </div>
    </div>` : ''
    }
`)

