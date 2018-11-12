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

        if(postSel){
            const {width:winW,height:winH} = {...getWindowSize()};
            const {width:barW} = {...getOffset(this.$bar)}

            const maxW = winW - barW;
            const maxH = winH;
            
            gallery = Object.keys(postSel.images).map(imageId => {
                const tempImages = postSel.images[imageId];
                
                const bestFit = Object.keys(tempImages).reduce((bestFit,sizeId) => {
                    const {width:tempW,height:tempH} = {...tempImages[sizeId]};
                    const {width:bestW,height:bestH} = {...tempImages[bestFit]}
                    
                    if(bestFit !== sizeId && tempW < maxW && tempH < maxH && (bestW < tempW || bestH < tempH)){
                        return sizeId
                    }
                    else return bestFit
                })
                
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
            title
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
    }

    goHome(){
        go('/');
    }
    
    render() {
        const {postsOrder,posts,thumb,info,obraSel,gallery,title} = {...this.props}
        let actYear;

        return(`
            <div id="media" class="Portada__media media--${obraSel ? 'opened' : 'closed'}">
                <div id="gallery" class="media__gallery">
                    ${gallery.map(image => `
                        <div class="gallery__image" style="
                            background-image:url(${image.source_url});
                        "></div>
                    `).join('')}
                </div>
                <div id="bar" class="media__bar">
                    <div class="media__nano" onCLick="goHome">NANO VALDES</div>
                    <div class="media__thumbnail" style="background-image:url(${thumb})">
                        ${title ? `
                            <span>${title}</span>
                        `: ''}
                    </div>
                    <div class="media__info">${info}</div>
                </div>
            </div>
            <div class="Portada__obra">
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

