
import Component from '../../lib/Component.js';
import { getPostImages } from './actions.js';

export default class Obra extends Component {
    constructor(className) {
        super(className); 
    }
    
    stateToprops(state){
        const {
            posts={},
            router:{params:{obraId:obraSel}}
        } = {...state};
        const {id:myId} = {...this.domProps}
        const postData = posts[myId]

        if(obraSel === myId && !postData.imagesLoaded && !postData.imagesLoading){
            getPostImages(myId);
        }

        return ({
            ...postData
        })
    }
    
    render() {
        const {title} = {...this.props};

        return(`
            <div class="Obra__info">
                <div class="Obra__title">${title}</div>
            </div>
        `)
    }
}

