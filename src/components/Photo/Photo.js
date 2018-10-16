
import Component from '../../lib/Component.js'
import { go, goOut } from '../../lib/router.js'

export default class Photo extends Component {
    constructor(className) {
        super(className);
    }
    
    stateToprops(state){
        return ({ 
        })
    }
    
    onClickOwner(ev) {
        ev.stopPropagation();
        goOut(`https://www.flickr.com/photos/${this.domProps.owner}/${this.domProps.id}`,true);
    }

    onClickImage(ev) {
        go(`/images/${this.domProps.id}`);
    }
    
    render() {
        const imageStyle = `background-image:url('${this.domProps.url}')`
        return(`
            <div class="Photo__image" style="${imageStyle}"></div>
            <div class="Photo__info" onClick="onClickImage">
                <div class="Photo__title">${this.domProps.caption}</div>
                <div class="Photo__owner" onClick="onClickOwner">${this.domProps.ownername}</div>
            </div>
        `)
    }
}

