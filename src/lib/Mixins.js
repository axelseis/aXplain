import { reducers, actions as libActions } from './actions.js'
import { dispatchAction, addReducer } from './store.js'

const actions = {
    SHOW_COMPONENT: 'SHOW_COMPONENT',
    HIDE_COMPONENT: 'HIDE_COMPONENT',
}

addReducer({
    [actions.SHOW_COMPONENT]: reducers[libActions.SET_COMPONENT_PROP],
    [actions.HIDE_COMPONENT]: reducers[libActions.SET_COMPONENT_PROP]
})

export const ShowHide = (superclass) => class extends superclass {
    show() {
        this.$clip.classList.remove('hidden');
        this.$clip.classList.add('showing');
        dispatchAction(actions.SHOW_COMPONENT,{
            componentName: this.name,
            showing: true
        })
    }

    hide() {
        this.$clip.classList.remove('showing');
        this.$clip.classList.add('hidden');
        dispatchAction(actions.HIDE_COMPONENT,{
            componentName: this.name,
            showing: false
        })
    }
}
