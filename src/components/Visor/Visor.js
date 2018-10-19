import Component from '../../lib/Component.js'
import { getWindowSize } from '../../utils.js';
import {getImageDetails, onImageLoaded} from './actions.js';

export default class Header extends Component {
    constructor(className) {
        super(className);
    }
    
    stateToprops(state){
        const imageId = state.router && state.router.params && state.router.params.imageId;
        const imageDetails = (state.details && state.details[imageId]);
        const sizes = imageDetails && Object.values(imageDetails.size);
        const imageUrl = sizes && sizes.reduce((maxSize,size) => {
            const winSize = getWindowSize();
            if((size.width < winSize.width && size.height < winSize.height)
            && (size.width > maxSize.width || size.height > maxSize.height)){
                return size;
            }
            else {
                return maxSize;
            }
        },sizes[0]).source;
        const imageLoaded = state.imagesLoaded && state.imagesLoaded.indexOf(imageUrl) != -1;
        const imagePos = !imageLoaded && state.App && state.App.visorPosition || {top:0,left:0,width:'100%',height:'100%'};

        if(imageId && !imageDetails){
            getImageDetails(imageId);
        }

        return ({
            showing: !!imageId,
            imageDetails,
            imagePos,
            imageUrl,
            imageLoaded
        })
    }

    onLoadImage(ev){
        onImageLoaded(this.props.imageUrl);
    }
    
    render() {
        const {top,left,width,height} = {...this.props.imagePos}
        const title = this.props.imageDetails && this.props.imageDetails.title && this.props.imageDetails.title._content

        return(`
            <style>
                .Visor {
                    z-index: ${this.props.showing ? 10 : -1};            
                    top: ${top};
                    left: ${left};
                    width: ${width};
                    height: ${height};
                }
            </style>
            <div class="Visor__image image--${this.props.imageLoaded ? 'loaded' : 'loading'}">
                ${this.props.imageUrl ? `
                    <img src="${this.props.imageUrl}" alt="${title}" onload="onLoadImage">
                ` : ''}
            </div>
        `)
    }
}

