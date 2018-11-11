
import Component from '../../lib/Component.js'
import User from '../User/User.js'
import { setpageIndex, defineScrollbarWidth } from './actions.js';

export default class Team extends Component {
    constructor(className) {
        super(className, [User]);
        
        this.onResize = () =>  {
            defineScrollbarWidth(window.innerWidth - this.$clip.clientWidth)
        }

        window.addEventListener('resize', this.onResize)
    }
    
    dispose(){
        window.removeEventListener('resize', this.onResize);
        super.dispose();
    }
    
    stateToprops(state){
        const {order=[], App:{perpage=1,page=1}} = {...state}
        const indexOut = page*perpage;
        const indexIn = indexOut - perpage;
        const orderPage = order.slice(indexIn,indexOut);

        return ({
            order: orderPage,
            page,
            maxPages: Math.floor(order.length/perpage)
         })
    }
    
    onClickPageButton(ev){
        const page = ev.currentTarget.getAttribute('pageindex');
        setpageIndex(page)
    }
    
    onClickPrevButton(ev){
        const page = ev.currentTarget.getAttribute('pageindex');
        setpageIndex(Math.max(0,this.props.page-1));
    }
    
    onClickNextButton(ev){
        const page = ev.currentTarget.getAttribute('pageindex');
        setpageIndex(Math.min(this.props.maxPages, this.props.page+1));
    }
    
    onEndRender(){
        defineScrollbarWidth(window.innerWidth - this.$clip.clientWidth)
    }
    
    render() {
        const {order,page,maxPages} = {...this.props};

        return(`
            <div class="Team__list">
                ${order.map(UserId => `
                    <User id="${UserId}" class="User Team__user"></User>
                `).join('')}
            </div>
            <div class="Team__footer">
                ${maxPages > 0 ? `
                    <div class="footer__button button--prev" onClick="onClickPrevButton"><</div>
                    ${[...Array(maxPages)].map((x,index) => {
                        const selected = (index+1) == page ? 'button--selected' : '';
                        return(`
                            <div class="footer__button button--page ${selected}" pageindex="${index+1}" onClick="onClickPageButton">${index+1}</div>
                        `)
                    }).join('')}
                    <div class="footer__button button--next" onClick="onClickNextButton">></div>
                ` : ''}
            </div>
        `)
    }
}

