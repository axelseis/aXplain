import Component from '../../lib/Component.js'
import {mapEvent} from '../../lib/utils.js'
import {getImages, setWindowSize, setScrollPos} from './actions.js';

import Loader from './Loader.js';

export default class Landing extends Component {

    constructor(className) {
        super(className);

        this.inited = false;
        
        window.addEventListener(mapEvent('resize'), setWindowSize)
        window.addEventListener('scroll', (ev) => {setScrollPos(this.$clip)});

        setWindowSize();
        setScrollPos(this.$clip);
        getImages(1);
    }

    stateToprops(state) {
        const images = [...(state.images||[])];
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
                .Gallery__image {
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
                        const {farm,server,id,secret} = {...image};
                        const imageStyle = `background-image:url('${image.url_m}')`
                        return(`
                            <div class="Gallery__image" style="${imageStyle}"></div>
                        `)
                    }).join('')}
                ` : ''}
            </div>
            <div class="Gallery__footer">
            </div>
        `)
    }
}

