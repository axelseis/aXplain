import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'

export default class Info extends ShowHide(Component) {
    render() {
        console.log("this.props ", this.props);
    }
}

