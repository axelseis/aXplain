import Component from '../../lib/Component.js'
import { actions as LibActions } from '../../lib/actions.js';
import { dispatchAction } from '../../lib/store.js';

export default class GPButton extends Component {
    constructor(className) {
        super(className);

        this.overBind = this.onOverButton.bind(this);
        this.outBind = this.onOutButton.bind(this);

        this.$clip.addEventListener('mouseout', this.outBind);
        this.$clip.addEventListener('mouseover', this.overBind);

        this.forceRender();
    }

    stateToprops(state){
        const componentData = (state.Components && state.Components[this.name]) || {};
        const {onhover, hoverPos} = {...componentData}

        return({
            onhover,
            hoverPos
        })
    }

    onOverButton(ev){
        dispatchAction(LibActions.SET_COMPONENT_PROP,{
            componentName: this.name,
            onhover: true,
            hoverPos: {
                left: ev.offsetX,
                top: ev.offsetY
            }    
        })    
    }

    onOutButton(ev){
        dispatchAction(LibActions.SET_COMPONENT_PROP,{
            componentName: this.name,
            onhover: false
        })
    }

    render(){
        const {left,top} = {...(this.props.hoverPos||{})};
        const hoverClass = `gpbutton__hover hover--${this.props.onhover}`;
        const hoverStyle = this.props.onhover ? `left:${left}px;top:${top}px` : '';

        return(`
            <div class="${hoverClass}" style="${hoverStyle}"></div>
            <div class="gpbutton__label">
                ${this.domProps.label}
            </div>
        `)
    }
}