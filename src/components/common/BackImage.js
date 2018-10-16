import Component from '../../lib/Component.js'
import { getOffset, getAssetsFolder } from '../../utils.js';
import { setSectionBackLoaded } from '../Landing/actions.js';

export default class BackImage extends Component {
    constructor(className) {
        super(className);
    }

    stateToprops(state){
        const backLoaded = state.Components && state.Components[this.domProps.section] && state.Components[this.domProps.section].backLoaded;
        const showing = state.Components && state.Components[this.domProps.section] && state.Components[this.domProps.section].showing;
        const imageRatio = (backLoaded && state.Components[this.domProps.section].imageRatio) || 1
        const clipOffset = getOffset(this.$clip.parentNode);
        const clipRatio = clipOffset.width / clipOffset.height;
        const fitType = clipRatio < imageRatio ? 'H' : 'W';
        const showImage = showing || backLoaded;

        return({
            backLoaded,
            showImage,
            fitType
        })
    }

    onloadBack(ev){
        const imageRatio = ev.currentTarget.naturalWidth / ev.currentTarget.naturalHeight;
        setSectionBackLoaded(this.domProps.section, imageRatio);
    }

    render(){
        const backClass = `${this.domProps.section}__back section__back imagefit--${this.props.fitType} ${this.props.backLoaded ? 'back--loaded' : 'back--loading'}`
        const imageFile = `${getAssetsFolder()}back/${this.domProps.imgfile}.jpg`;
        
        return(`
            <div class="${backClass}">
                ${this.props.showImage ? `
                    <img src="${imageFile}" alt="" onload="${this.props.backLoaded ? '' : 'onloadBack'}">
                ` : ''}
            </div>
        `)
    }
}