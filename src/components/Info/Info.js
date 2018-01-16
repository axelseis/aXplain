import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'

export default class Info extends ShowHide(Component) {
    constructor(refClip) {
        super(refClip);
    }

    stateToprops(state) {
        return { ...state.Info };
    }

    render() {
        if(this.props.inited){
            //console.log("this.$clip ", this.$clip);
        }
    }
}

