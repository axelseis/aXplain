import Component from '../../lib/Component.js'
import Obra from '../Obra/Obra.js';

export default class Portada extends Component {

    constructor(className) {
        super(className, [Obra]);        
    }
    
    stateToprops(state) {
        const {postsOrder=[],posts={}} = {...state}
        return ({
            postsOrder,
            posts
        })
    }

    render() {
        const {postsOrder,posts} = {...this.props}
        let actYear;

        return(`
            <div class="Portada__media">
                <div class="media__images"></div>
                <div class="media__thumbnail"></div>
                <div class="media__nanovaldes"></div>
                <div class="media__info"></div>
            </div>
            <div class="Portada__obra">
                ${postsOrder.map((postId) => {
                    const {date} = {...posts[postId]}
                    const postYear = new Date(date).getFullYear();
                    
                    let isNewYear = false;
                    if(postYear != actYear){
                        isNewYear = true;
                        actYear = postYear;
                    }

                    return(`
                        ${isNewYear ? `
                            <div class="Portada__year">
                                ${actYear}
                            </div>
                        `:''}
                        <Obra id="${postId}" class="Obra"></Obra>
                    `)
                }).join('')}
            </div>
        `)
    }
}

