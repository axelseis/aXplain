import Component from '../../lib/Component.js'
import {mapEvent} from '../../lib/utils.js'
import {setWindowSize, setScrollPos} from './actions.js';
import { parseStringToHTML, getOffset } from '../../utils.js';
import Photo from '../Photo/Photo.js';
import Loader from '../common/Loader.js';

export default class Gallery extends Component {

    constructor(className) {
        super(className, [Photo]);
        
        this.onScroll = () => {
            setScrollPos(this.$clip);
        }

        window.addEventListener(mapEvent('resize'), setWindowSize)
        window.addEventListener(mapEvent('scroll'), this.onScroll);

        setScrollPos(this.$clip);
    }
    
    dispose(){
        window.removeEventListener(mapEvent('resize'), setWindowSize);
        window.removeEventListener(mapEvent('scroll'), this.onScroll);
        
        super.dispose();
    }

    stateToprops(state) {
        const images = [...Object.values(state.images||[])];
        const maxW = Math.floor(getOffset(this.$clip).width);
        const visorOpened = !(state.router && state.router.params && state.router.params.imageId);

        let rows = 10;
        let imageW = () => Math.floor(maxW/rows);
        while(imageW()<150){
            rows--;
        }

        return ({
            images,
            imageW: imageW()
        })
    }

    onEndRender(){
        setWindowSize(this.$clip);            
    }

    render() {
        const images = this.props.images;
        const loaded = images && images.length;

        return(`
            <style>
                .Gallery__photo {
                    width: ${this.props.imageW}px;
                    height: ${this.props.imageW}px;
                }
            </style>
            ${Loader(loaded)}
            <div class="Gallery__header">
            </div>
            <div class="Gallery__content">
                ${loaded ? `
                    ${images.map(image => {
                        const title = parseStringToHTML(image.title);
                        const owner = image.owner;
                        const ownername = parseStringToHTML(image.ownername);
                        const imageUrl = image.url_s || image.url_q || image.url_t
                        
                        return(`
                            <Photo class="Gallery__photo Photo"
                                id="${image.id}"
                                url="${imageUrl}" 
                                caption="${title}"
                                ownername="${ownername}"
                                owner="${owner}">
                            </Photo>
                        `)
                    }).join('')}
                ` : ''}
            </div>
            <div class="Gallery__footer">
            </div>
        `)
    }
}

