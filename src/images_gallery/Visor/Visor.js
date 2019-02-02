import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js'
import { getWindowSize } from '../../utils.js';
import {getImageDetails, onImageLoaded, onImageClosed} from './actions.js';
import { addClass, removeClass } from '../../lib/utils.js';
import { go } from '../../lib/router.js';
import Loader from '../common/Loader.js';

export default class Visor extends Component {
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
            addClass(this.$clip,'loaded');
            addClass(document.body,'App--onphoto')
        }
        else{
            removeClass(document.body,'App--onphoto')
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
        console.log('ev', ev)
        onImageLoaded(this.props.imageUrl);
        console.log('this.props.imageUrl', this.props.imageUrl)
    }
    
    onClickCloseButton(ev){
        onImageClosed();
        go('/');
    }

    getImageDetails(){
        const {title,description,taken,name,location} = {...this.props.imageDetails};
        
        return(html`
            <div class="Visor__details">
                <div class="detail__title">${title}</div>
                <div class="detail__description">${description}</div>
                <div class="detail__name">${name}</div>
                <div class="detail__taken">${taken}</div>
                ${location ? html`
                    <div class="detail__location">${location}</div>
                ` : ''}
            </div>            
        `)
    }
    
    render() {
        const {top,left,width,height} = {...this.props.imagePos}

        return(html`
            <style>
                .Visor {
                    z-index: ${this.props.showing ? 10 : -1};            
                    top: ${top};
                    left: ${left};
                    width: ${width};
                    height: ${height};
                }
            </style>
            ${this.props.imageLoaded ? html`
                <div class="Visor__closeButton" @click="${(ev)=>this.onClickCloseButton(ev)}"></div>
            ` : Loader(false)}
            <div class="Visor__image image--${this.props.imageLoaded ? 'loaded' : 'loading'}">
                ${this.props.imageUrl ? html`
                    <img src="${this.props.imageUrl}" alt="${this.props.imageUrl}" @load="${(ev)=>this.onLoadImage(ev)}">
                ` : ''}
            </div>
            ${this.props.imageLoaded && this.props.imageDetails ? this.getImageDetails() : ''}
        `)
    }
}

