import { html } from '../../lib/lit-html/lit-html.js';
import Component from '../../lib/Component.js';
import { stringToDom } from '../../lib/utils.js';
import { go } from '../../lib/router.js';

import { positions } from '../App/App.js';

export default class InfoBar extends Component {
    constructor(className) {
        super(className);      
    }

    stateToprops(state) {
        const {
            nano,
            posts={},
            router:{params:{obraId:obraSel},props:{position}},
            Components:{Portada:{obraOver}={}}
        } = {...state};  
        
        const postSel = posts[obraSel] 
        const postOver = posts[obraOver];
        const postInfo = postSel || postOver;

        let thumb,title,info;
        
        if(postInfo){
            const {images, featured_media, content} =  {...postInfo}
            const postMedia = images[featured_media] || images[Object.keys(images)[0]];
            thumb = postOver && postMedia && postMedia.thumbnail && postMedia.thumbnail.source_url
            title = postSel && postSel.title;
            info = content;
        }
        else {
            thumb = 'https://nanovaldes.com/wp-content/uploads/2013/07/nanofoto-240x240.jpg';
            info = null;
        }
        
        return ({
            thumb,
            info,
            title,
            nano,
            position
        })
    }


    onClickNano(ev){
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
        }    
    }
    
    onMouseOverNano(ev){
        this.setState({
            nanoHover: true
        })
    }
    
    onMouseOutNano(ev){
        this.setState({
            nanoHover: false
        })
    }
    
    render(){
        const {thumb,info,title,nano,position} = {...this.props}
        const {nanoHover} = {...this.state};
        
        const infoDOM = stringToDom(info);

        return(html`
            <div class="media__nano" 
                @click="${(ev)=>this.onClickNano(ev)}" 
                @mouseOver="${(ev)=>this.onMouseOverNano(ev)}" 
                @mouseOut="${(ev)=>this.onMouseOutNano(ev)}"
            >
                ${nano.name} ${plusAnim(position, nanoHover)}
            </div>
            <div class="media__thumbnail">
                <div class="media__thumbnail__selected" style="background-image:url(${thumb})"></div>
                <div class="media__thumbnail__default"></div>
                ${title ? html`
                    <span>${stringToDom(title)}</span>
                `: ''}
            </div>
            <div class="media__info">
                ${infoDOM || html`
                    <p class="info__address">${nano.address}</p>
                    <a href="mailto:${nano.mail}" class="info__mail">${nano.mail}</a>
                    <div class="">${nano.phone.map(phone => html`
                        <a href="tel:${phone.replace(/\s/g,'')}" class="info__phone">${phone}</a>
                    `)}</div>
                    <div class="info__exhibitions" @click="${(ev)=>this.onClickNano(ev)}">
                        exhibitions  ${plusAnim(position, nanoHover)}
                    </div>
                `}
            </div>
        `)
    }
}

const plusAnim = (position, hover) => {
    return(html`
        <div class="plusAnim ${hover ? 'hover' : ''}">
            <div class="lineH"></div>
            <div class="lineV1 position--${position}"></div>
            <div class="lineV2 position--${position}"></div>
        </div>
    `)
}
