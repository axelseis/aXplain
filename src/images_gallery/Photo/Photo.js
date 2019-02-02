
import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js';
import { goOut, go } from '../../lib/router.js';
import { setImageSelected } from './actions.js';

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
        setImageSelected(this.$clip);
        go(`/images/${this.domProps.id}`);
    }
    
    render() {
        const imageStyle = `background-image:url('${this.domProps.url}')`
        return(html`
            <div class="Photo__image" style="${imageStyle}"></div>
            <div class="Photo__info" @click="${(ev)=>this.onClickImage(ev)}">
                <div class="Photo__title">${this.domProps.caption}</div>
                <div class="Photo__owner" @click="${(ev)=>this.onClickOwner(ev)}">${this.domProps.ownername}</div>
            </div>
        `)
    }
}

