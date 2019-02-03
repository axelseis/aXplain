import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js'
import { go } from '../../lib/router.js';
import { stringToDom } from '../../lib/utils.js'


import InfoBar from './InfoBar.js';
import Gallery from '../Gallery/Gallery.js';
import Obra from '../Obra/Obra.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Obra,Gallery,InfoBar]);
    }
    
    stateToprops(state) {
        const {
            postsOrder=[],
            posts={},
            exhibitions
        } = {...state};  
        
        return ({
            postsOrder,
            posts,
            exhibitions
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
        document.getElementById('media').scrollTop = 0;
    }

    render() {
        const {postsOrder,posts,exhibitions} = {...this.props}
        let actYear;
        
        return(html`
            <div id="media" class="Portada__left">
                <Gallery id="Gallery" class="media__Gallery"></Gallery>
                <InfoBar id="InfoBar" class="media__bar"></Media>
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

                        return(html`
                            ${isNewYear ? html`
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
                                @mouseout="${(ev)=>this.onMouseOutObra(ev)}"
                                @mouseover="${(ev)=>this.onMouseOverObra(ev)}"
                                @click="${(ev)=>this.onClickObra(ev)}"
                                style="animation-delay:${index*0.0598}s;"
                            ></Obra>
                        `)
                    })}
                </div>
                <div id="exhibitions" class="Portada__exhibitions">
                    ${stringToDom(exhibitions)}
                </div>
            </div>
        `)
    }
}

