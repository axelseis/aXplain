import Component from '../../lib/Component.js'
import { go } from '../../lib/router.js';

import Gallery from '../Gallery/Gallery.js';
import Obra from '../Obra/Obra.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Obra,Gallery]);        
    }
    
    stateToprops(state) {
        const {
            nano,
            postsOrder=[],
            posts={},
            router:{params:{obraId:obraSel} = {}}
        } = {...state};
        
        
        const postSel = posts[obraSel] 
        const postOver = posts[this.state && this.state.obraOver];
        const postThumb = postSel || postOver;
        
        let info = '';
        let title = '';
        let thumb = 'http://nanovaldes.com/wp-content/uploads/2013/07/nanofoto-240x240.jpg';

        if(postThumb){
            const {images, featured_media, content} =  {...postThumb}
            const postMedia = images[featured_media] || images[Object.keys(images)[0]];
            thumb = postMedia && postMedia.thumbnail && postMedia.thumbnail.source_url
            info = content
        }
        else {
            info = `
                <p class="info__address">${nano.address}</p>
                <p class="info__mail">${nano.mail}</p>
                <div class="info__phone">${nano.phone.map(phone => `
                    <p class="phone">${phone}</p>
                `).join('')}</div>
            `
        }

        return ({
            postsOrder,
            posts,
            thumb,
            info,
            obraSel,
            title,
            nano
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
    
    onMouseOverNano() {
        this.setState({
            nanoHover: true
        })
    }
    
    onMouseOutNano() {
        this.setState({
            nanoHover: false
        })
    }
    
    render() {
        const {postsOrder,posts,thumb,info,obraSel,title,nano} = {...this.props}
        const {showing} = {...this.domProps};
        const {nanoHover} = {...this.state};
        const mediaClass = showing === 'true' ? obraSel ? 'opened' : 'closed' : 'no-inited'
        const obraClass = `scroll--${showing === 'true' ? 'enabled' : 'disabled'}`;
        const plusStep = obraSel ? 'arrow-right' : 'plus';
        let actYear;
        
        return(`
            <div id="media" class="Portada__media media--${mediaClass}" >
                <Gallery id="Gallery" class="media__Gallery"></Gallery>
                <div id="bar" class="media__bar">
                    <div class="media__nano" onClick="goHome" onMouseOver="onMouseOverNano" onMouseOut="onMouseOutNano">
                        ${nano.name} ${plusAnim(plusStep, nanoHover)}
                    </div>
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

const plusAnim = (step, hover) => {
    return(`
        <div class="plusAnim ${hover ? 'hover' : ''}">
            <div class="lineH"></div>
            <div class="lineV1 ${step}"></div>
            <div class="lineV2 ${step}"></div>
        </div>
    `)
}