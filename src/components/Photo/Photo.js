
import Component from '../../lib/Component.js'
import { goOut } from '../../lib/router.js'

export default class Photo extends Component {
    constructor(className) {
        super(className);
    }
    
    stateToprops(state){
        return ({ 
        })
    }
    
    onClickImage(ev) {
        goOut(this.props.package.motogpUrl);
    }
    
    render() {
        const imageStyle = `background-image:url('${this.domProps.url}')`
        return(`
            <div class="Photo__image" style="${imageStyle}"></div>
            <div class="Photo__info">
                <div class="Photo__title">${this.domProps.caption}</div>
                <div class="Photo__owner">${this.domProps.owner}</div>
            </div>
        `)
    }
}

