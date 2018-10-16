import { reducers, actions as libActions } from './actions.js'
import { state, dispatchAction, addReducer } from './store.js'

const cssRules = {
    showing: 'section--showing',
    hidden: 'section--hidden'
}
const actions = {
    SHOW_COMPONENT: 'SHOW_COMPONENT_nolog',
    HIDE_COMPONENT: 'HIDE_COMPONENT_nolog'
}

addReducer({
    [actions.SHOW_COMPONENT]: reducers[libActions.SET_COMPONENT_PROP],
    [actions.HIDE_COMPONENT]: reducers[libActions.SET_COMPONENT_PROP]
})

export const ShowHide = (superclass) => class extends superclass {
    get showing() {
        return !!(state.Components && state.Components[this.name] && state.Components[this.name].showing);
    }
    
    show() {
        this.$clip.classList.remove(cssRules.hidden);
        this.$clip.classList.add(cssRules.showing);
        dispatchAction(actions.SHOW_COMPONENT,{
            componentName: this.name,
            showing: true
        })
    }

    hide() {
        this.$clip.classList.remove(cssRules.showing);
        this.$clip.classList.add(cssRules.hidden);
        dispatchAction(actions.HIDE_COMPONENT,{
            componentName: this.name,
            showing: false
        })
    }
}

export const ShowHideScroll = (superclass) => class extends superclass {
    constructor(initiator, classes2Render) {
        super(initiator, classes2Render);
        window.addEventListener('scroll', this.onScroll.bind(this));
        this.onScroll()
    }
    
    getOffset() {
        var rect = this.$clip.getBoundingClientRect();
        return {
            top: rect.top,
            bottom: rect.bottom
        }
    }
    
    onScroll(ev) {
        const myRect = this.getOffset();
        const winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        
        if(myRect.top < winH/2 && myRect.bottom > 0){
            this.show();
        }
        else {
            this.hide();
        }
    }

    get showing() {
        return !!(state.Components && state.Components[this.name] && state.Components[this.name].showing);
    }
    
    show() {
        // this.$clip.classList.remove(cssRules.hidden);
        // this.$clip.classList.add(cssRules.showing);
        dispatchAction(actions.SHOW_COMPONENT,{
            componentName: this.name,
            showing: true
        })
    }

    hide() {
        // this.$clip.classList.remove(cssRules.showing);
        // this.$clip.classList.add(cssRules.hidden);
        dispatchAction(actions.HIDE_COMPONENT,{
            componentName: this.name,
            showing: false
        })
    }
}
