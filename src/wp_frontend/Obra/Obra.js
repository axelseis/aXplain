
import Component from '../../lib/Component.js';
import { go } from '../../lib/router.js';
import { setImageSelected } from './actions.js';

export default class Obra extends Component {
    constructor(className) {
        super(className);        
    }
    
    stateToprops(state){
        const postData = state.posts[this.domProps.id]    
        return ({
            ...postData
        })
    }
    
    onClickInfo(ev) {
        go(`/obra/${this.domProps.id}`);
    }
    
    render() {
        const {title} = {...this.props};

        return(`
            <div class="Obra__info" onClick="onClickInfo">
                <div class="Obra__title">${title}</div>
            </div>
        `)
    }
}

