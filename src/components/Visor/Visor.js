import Component from '../../lib/Component.js'
import { getWindowSize } from '../../utils.js';
import {getImageDetails, onImageLoaded} from './actions.js';
import { addClass, hasClass, removeClass } from '../../lib/utils.js';
import { go } from '../../lib/router.js';
import Loader from '../common/Loader.js';

export default class Header extends Component {
    constructor(className) {
        super(className, [Loader]);
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
        const imageLoaded = state.App && state.App.imageLoaded;
        const imagePos = !imageLoaded && state.App && state.App.visorPosition || {top:0,left:0,width:'100%',height:'100%'};

        if(imageLoaded){
            addClass(this.$clip,'loaded')
        }
        else if(hasClass(this.$clip,'loaded')){
            removeClass(this.$clip,'loaded')
        }

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
    
    onClickCloseButton(ev){
        go('/');
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
            ${this.props.imageLoaded ? `
                <div class="Visor__closeButton" onClick="onClickCloseButton"></div>
            ` : `
                ${Loader(false)}
            `}
            <Loader class="Visor__loader"></Loader>
            <div class="Visor__image image--${this.props.imageLoaded ? 'loaded' : 'loading'}">
                ${this.props.imageUrl ? `
                    <img src="${this.props.imageUrl}" alt="${title}" onload="onLoadImage">
                ` : ''}
            </div>
        `)
    }
}

