import Component from '../../lib/Component.js'
import {setWindowSize, setScrollPos} from './actions.js';
import Photo from '../Photo/Photo.js';
import Loader from '../common/Loader.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Photo]);        
    }
    
    stateToprops(state) {
        return ({
        })
    }

    render() {
        return(`
            <div class="Portada__header"></div>
            <div class="Portada__content"></div>
            <div class="Portada__footer"></div>
        `)
    }
}

