import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'
import { addClass, removeClass, getOffset } from '../../lib/utils.js'
import { getRiders } from './actions.js'

const DRAG_CLASS = 'ondrag';
const DROP_CLASS = 'dropholder'
export default class Riders extends ShowHide(Component) {

    constructor(className) {
        super(className);

        this.mousePosition = {};

        this.dropHolderItem = null;
        this.listItemOnDrag = null;

        document.addEventListener('mouseup', this.onMouseUp.bind(this))
        this.$clip.addEventListener('mousemove', this.getMousePosition.bind(this))

        getRiders();
    }

    stateToprops(state) {
        return {
            bet: [...state.user.bets[state.season.actEvent]],
            riders: { ...state.riders },
            actEvent: {...state.events[state.season.actEvent]}
        };
    }

    getMousePosition(e){
        e = e || window.event;

        var pageX = e.pageX;
        var pageY = e.pageY;

        // IE 8
        if (pageX === undefined) {
            pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        this.mousePosition = {
            left: pageX,
            top: (pageY - getOffset (this.$clip).top)
        };
    }

    onMouseDownListItem(ev) {
        this.listItemOnDrag = ev.target;
        addClass(this.listItemOnDrag, DRAG_CLASS);

        this.setDropHolderItem(this.listItemOnDrag.nextElementSibling)
        this.$clip.appendChild(this.listItemOnDrag);

        this.dragListItem();
    }

    onMouseUp(ev) {
        if(this.listItemOnDrag){
            removeClass(this.listItemOnDrag, DRAG_CLASS)
            this.listItemOnDrag.removeAttribute('style')
            this.dropHolderItem.before(this.listItemOnDrag);

            this.listItemOnDrag = null;
            this.setDropHolderItem();
        }
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

    dragListItem() {
        if(this.listItemOnDrag){
            const listItems = this.$clip.querySelector(`.Play__list`).children;
            const itemToDrop = Array.from(listItems).find((item) => {
                return (
                    item.offsetTop+(parseInt(getComputedStyle(item).height)/2) > this.mousePosition.top
                )
            });
            const holderType =
            this.setDropHolderItem(itemToDrop);

            this.listItemOnDrag.style.top = this.mousePosition.top + 'px';
            this.listItemOnDrag.style.left = this.mousePosition.left + 'px';

            requestAnimationFrame(this.dragListItem.bind(this))
        }
    }

    render() {
        return (`
            <div class="Play__list">
                ${Object.keys(this.props.riders).map(riderId => {
                    if(this.props.bet.indexOf(parseInt(riderId)) === -1){
                        return listItemTpl(riderId, this.props.riders[riderId])
                    }
                }).join('')}
            </div>
            <div class="Play__bet">
                ${this.props.bet.map(riderId => {
                    return betItemTpl(riderId, this.props.riders[riderId] || {})
                }).join('')}
            </div>
        `)
    }
}

const listItemTpl = (riderId, riderData) => (`
    <div class="Play__list-item" riderId="${riderId}"
        onmousedown="onMouseDownListItem"
    >${riderData.surname} ${riderData.name}</div>
`)

const betItemTpl = (riderId, riderData) => (`
    <div class="Play__bet-item" riderId="${riderId}">${riderData.surname} ${riderData.name}</div>
`)

