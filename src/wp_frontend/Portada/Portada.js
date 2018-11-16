import Component from '../../lib/Component.js'
import { go } from '../../lib/router.js';

import Obra from '../Obra/Obra.js';
import { getWindowSize, getOffset } from '../../utils.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Obra]);        
    }
    
    stateToprops(state) {
        const {
            postsOrder=[],
            posts={},
            router:{params:{obraId:obraSel}}
        } = {...state};
        
        const postSel = posts[obraSel] 
        const postOver = posts[this.state && this.state.obraOver];
        
        let info = '';
        let title = '';
        let gallery = [];
        let thumb = 'http://nanovaldes.com/wp-content/uploads/2013/07/nanofoto-240x240.jpg';
        
        const postThumb = postSel || postOver;
        let maxW;
        let maxH;

        if(postSel){
            const {width:winW,height:winH} = {...getWindowSize()};
            const {width:barW} = {...getOffset(this.$bar)}

            maxW = winW - barW;
            maxH = winH;
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

            title = postSel.title
        }

        if(postThumb){
            const {images, featured_media, content} =  {...postThumb}
            const postMedia = images[featured_media] || images[Object.keys(images)[0]];
            thumb = postMedia && postMedia.thumbnail && postMedia.thumbnail.source_url
            info = content
        }
        
        return ({
            postsOrder,
            posts,
            thumb,
            info,
            obraSel,
            gallery,
            title,
            maxW,
            maxH
        })
    }

    onMouseOutObra(ev){
        this.setState({
            obraOver: null
        })
    }

    onMouseOverObra(ev){
        this.setState({
            obraOver: (ev.currentTarget || ev.target).getAttribute('id')
        })
    }

    onClickObra(ev) {
        go(`/obra/${(ev.currentTarget || ev.target).id}`);
        this.$media.scrollTop = 0;
        this.setState({
            imagesLoaded: []
        })
    }

    goHome(){
        go('/');
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
        const {postsOrder,posts,thumb,info,obraSel,gallery,title,maxW,maxH} = {...this.props}
        const featured = posts[obraSel] && posts[obraSel].featured_media;
        const {showing} = {...this.domProps};
        const {imagesLoaded=[]} = {...this.state}
        const mediaClass = showing === 'true' ? obraSel ? 'opened' : 'closed' : 'no-inited'
        const obraClass = `scroll--${showing === 'true' ? 'enabled' : 'disabled'}`;

        let actYear;
        
        return(`
            <div id="media" class="Portada__media media--${mediaClass}" >
                <div id="gallery" class="media__gallery">
                    ${gallery.map(image => {
                        const {width,height,source_url,imageId} = {...image}
                        const loaded = imagesLoaded.indexOf(source_url) === -1;
                        const imageClass= `gallery__image image--${loaded? 'loading' : 'loaded'}`;
                        const vertical = height > width;
                        const aspect = width/height;
                        const maxImageW = Math.min(maxW, maxH*aspect);
                        const maxImageH = Math.max(maxH, maxW*aspect);

                        const imageStyle = `
                            max-width: ${vertical ? maxImageH*aspect : maxImageW}px;
                            max-height: ${vertical ? maxImageH : maxImageW*aspect}px;
                        `
                        const isFirst = imageId === featured;
                        return(`
                            <div class="${imageClass}" style="${isFirst ? 'order:1' : 'order:2'}; flex:0 0 ${height}px">
                                <img src="${source_url}" style="${imageStyle}" onload="onLoadGalleryImage" />
                            </div>
                        `)
                    }).join('')}
                </div>
                <div id="bar" class="media__bar">
                    <div class="media__nano" onClick="goHome">NANO VALDES</div>
                    <div class="media__thumbnail">
                        <div class="media__thumbnail__selected" style="background-image:url(${thumb})"></div>
                        <div class="media__thumbnail__default"></div>
                        ${title ? `
                            <span>${title}</span>
                        `: ''}
                    </div>
                    <div class="media__info">${info}</div>
                </div>
            </div>
            <div class="Portada__obra ${obraClass}">
                ${postsOrder.map((postId,index) => {
                    const {date} = {...posts[postId]}
                    const postYear = new Date(date).getFullYear();
                    
                    let isNewYear = false;
                    if(postYear != actYear){
                        isNewYear = true;
                        actYear = postYear;
                    }

                    return(`
                        ${isNewYear ? `
                            <div 
                                class="Portada__year"
                                style="animation-delay:${index*0.08}s;"
                            >
                                ${actYear}
                            </div>
                        `:''}
                        <Obra 
                            id="${postId}" 
                            class="Obra" 
                            onMouseOut="onMouseOutObra"
                            onMouseOver="onMouseOverObra"
                            onClick="onClickObra"
                            style="animation-delay:${index*0.08}s;"
                        ></Obra>
                    `)
                }).join('')}
            </div>
        `)
    }
}

