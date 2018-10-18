import Component from '../../lib/Component.js'
import {mapEvent} from '../../lib/utils.js'
import {setWindowSize, setScrollPos} from './actions.js';
import { parseStringToHTML } from '../../utils.js';
import Photo from '../Photo/Photo.js';
import Loader from './Loader.js';

export default class Landing extends Component {

    constructor(className) {
        super(className, [Photo]);

        this.inited = false;
        
        window.addEventListener(mapEvent('resize'), setWindowSize)
        window.addEventListener('scroll', (ev) => {setScrollPos(this.$clip)});

        setWindowSize();
        setScrollPos(this.$clip);
    }

    stateToprops(state) {
        const images = [...Object.values(state.images||[])];
        const {winW} = {...state.App};
        
        let rows = 10;
        let imageW = () => Math.floor(winW/rows);
        while(imageW()<150){
            rows--;
        }

        return ({
            images,
            imageW: imageW()
        })
    }

    render() {
        const images = this.props.images;
        const loaded = images && images.length;
        
        return (`
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

