import { setComponentProp } from './actions.js'

export const ShowHide = (superclass) => class extends superclass {
    show() {
        this.$clip.classList.remove('hidden');
        this.$clip.classList.add('showing');
        setComponentProp(this._name,{
            showing: true
        })
    }

    hide() {
        this.$clip.classList.remove('showing');
        this.$clip.classList.add('hidden');
        setComponentProp(this._name,{
            showing: false
        })
    }
}
