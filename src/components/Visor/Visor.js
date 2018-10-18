import Component from '../../lib/Component.js'
import { getWindowSize } from '../../utils.js';
import {getImageData} from './actions.js';

export default class Header extends Component {
    constructor(className) {
        super(className);
    }
    
    stateToprops(state){
        const imageId = state.router && state.router.params && state.router.params.imageId;
        const images = state.images;
        const imageData = images.find(image => image.id === imageId);
        const {width:winW,height:winH} = {...getWindowSize()}
        const imagePos = (state.App && state.App.visorPosition) || {top:0,left:0,width:winW,height:winH};
        const loaded = state.App && state.App.imageLoaded;

        if(imageId && !imageData){
            getImageData();
        }

        return ({
            showing: !!imageId,
            imageData,
            imagePos
        })
    }

    render() {
        const {top,left,width,height} = {...this.props.imagePos}
        return(`
            <style>
                .Visor {
                    z-index: ${this.props.showing ? 10 : -1};            
                }
                .Visor__image {
                    top: ${top}px;
                    left: ${left}px;
                    width: ${width}px;
                    height: ${height}px;
                }
            </style>
            <div class="Visor__back"></div>
            <div class="Visor__image"></div>
        `)
    }
}

