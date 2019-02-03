import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js'
import { getWindowSize, getOffset } from '../../utils.js';

export default class Gallery extends Component {

    constructor(className) {
        super(className);      

        window.addEventListener('resize', this.onResize.bind(this));
        this.onResize();
    }
    
    onResize(ev){
        const {width:winW,height:winH} = {...getWindowSize()}
        this.setState({winW,winH})
    }

    stateToprops(state) {
        const {
            posts={},
            router:{params:{obraId:obraSel}}
        } = {...state};
        
        const postSel = posts[obraSel] 
        
        let gallery = [];
        let maxW;
        let maxH;

        if(postSel){
            const {winW,winH} = {...this.state};
            const {width:barW} = {...getOffset(document.getElementById('InfoBar'))}

            maxW = winW - barW;
            maxH = winH-5;
            
            const compare = (idA,idB) => {
                const featured = postSel.featured_media;
                const compared = parseInt(idA) === featured ? -1 : parseInt(idB) === featured ? 1 : 0;
                return compared
            }

            gallery = Object.keys(postSel.images).sort(compare).map(imageId => {
                const tempImages = postSel.images[imageId];
                
                const bestFit = Object.keys(tempImages).reduce((bestFit,sizeId) => {
                    const {width:tempW,height:tempH} = {...tempImages[sizeId]};
                    const {width:bestW,height:bestH} = {...tempImages[bestFit]}
                    
                    if(bestFit !== sizeId && tempW < maxW && tempH < maxH && (bestW < tempW || bestH < tempH)){
                        return sizeId
                    }
                    else return bestFit
                })
                tempImages[bestFit].imageId = parseInt(imageId);
                return tempImages[bestFit];
            },'thumbnail')
        }
        else if(this.state.imagesLoaded && this.state.imagesLoaded.length){
            this.setState({
                imagesLoaded: []
            })
        }

        const featured = posts[obraSel] && posts[obraSel].featured_media;

        return ({
            gallery,
            featured,
            maxW,
            maxH
        })
    }

    onLoadGalleryImage(ev){
        const {imagesLoaded = []} =  {...this.state}
        this.setState({
            imagesLoaded: [
                ...imagesLoaded,
                ev.target.src
            ]
        })
    }

    render() {
        const {gallery,featured,maxW,maxH} = {...this.props}
        const {imagesLoaded=[]} = {...this.state}
        
        return(html`
            <div class="media__Gallery">
                ${gallery.map(image => {
                    const {width,height,source_url,imageId} = {...image}
                    
                    const loaded = imagesLoaded.indexOf(source_url) === -1;
                    const imageClass= `Gallery__image image--${loaded? 'loading' : 'loaded'}`;
                    const isFirst = imageId === featured;
                    
                    const vertical = height > width;
                    const aspect = width/height;
                    const maxImageH = maxW*aspect > maxH ? maxH : Math.max(maxH, maxW*aspect);
                    const maxImageW = vertical ? maxImageH*aspect : Math.min(maxW, maxH*aspect);

                    return(html`
                        <div class="${imageClass}" style="${isFirst ? 'order:1' : 'order:2'}; flex:0 0 ${height}px">
                            <img src="${source_url}" 
                                style="
                                    max-width: ${maxImageW}px;
                                    max-height: ${maxImageH}px;                        
                                " 
                                @load="${(ev)=>this.onLoadGalleryImage(ev)}"
                            />
                        </div>
                    `)
                })}
            </div>
        `)
    }
}
