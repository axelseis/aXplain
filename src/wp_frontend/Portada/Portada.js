import Component from '../../lib/Component.js'
import { go } from '../../lib/router.js';

import Gallery from '../Gallery/Gallery.js';
import Obra from '../Obra/Obra.js';
import { positions } from '../App/App.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Obra,Gallery]);
    }
    
    stateToprops(state) {
        const {
            nano,
            postsOrder=[],
            posts={},
            router:{params:{obraId:obraSel},props:{position}},
            exhibitions
        } = {...state};  
        
        const postSel = posts[obraSel] 
        const postOver = posts[this.state && this.state.obraOver];
        const postThumb = postSel || postOver;

        let info = null;
        let title = postSel && postSel.title;
        let thumb = 'https://nanovaldes.com/wp-content/uploads/2013/07/nanofoto-240x240.jpg';

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
            title,
            nano,
            exhibitions,
            position
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

    onClickNano(){
        console.log('this.props.position', this.props.position)
        switch(this.props.position){
            case positions.obra: 
                go('/exhibitions');
                break;
            case positions.gallery:
                go('/');
                break;
            case positions.exhibitions:
                go('/');
                break;
        }    }
    
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
        const {postsOrder,posts,thumb,info,title,nano,exhibitions,position} = {...this.props}
        const {nanoHover} = {...this.state};
        let actYear;
        
        return(`
            <div id="media" class="Portada__left" >
                <Gallery id="Gallery" class="media__Gallery"></Gallery>
                <div id="bar" class="media__bar">
                    <div class="media__nano" onClick="onClickNano" onMouseOver="onMouseOverNano" onMouseOut="onMouseOutNano">
                        ${nano.name} ${plusAnim(position, nanoHover)}
                    </div>
                    <div class="media__thumbnail">
                        <div class="media__thumbnail__selected" style="background-image:url(${thumb})"></div>
                        <div class="media__thumbnail__default"></div>
                        ${title ? `
                            <span>${title}</span>
                        `: ''}
                    </div>
                    <div class="media__info">
                        ${info || `
                            <p class="info__address">${nano.address}</p>
                            <a href="mailto:${nano.mail}" class="info__mail">${nano.mail}</a>
                            <div class="info__phone">${nano.phone.map(phone => `
                                <a href="tel:${phone.replace(/\s/g,'')}" class="phone">${phone}</a>
                            `).join('')}</div>
                            <div class="info__exhibitions" onClick="onClickNano">exhibitions</div>
                        `}
                    </div>
                </div>
            </div>
            <div class="Portada__right">
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
                                style="animation-delay:${index*0.0598}s;"
                            ></Obra>
                        `)
                    }).join('')}
                </div>
                <div id="exhibitions" class="Portada__exhibitions">
                    ${exhibitions}
                </div>
            </div>
        `)
    }
}

const plusAnim = (position, hover) => {
    return(`
        <div class="plusAnim ${hover ? 'hover' : ''}">
            <div class="lineH"></div>
            <div class="lineV1 position--${position}"></div>
            <div class="lineV2 position--${position}"></div>
        </div>
    `)
}