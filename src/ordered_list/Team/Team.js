import { html } from '../../lib/lit-html/lit-html.js';
import { repeat } from '../../lib/lit-html/directives/repeat.js';

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
    
    
    _filterUsers(users,dateIn,dateOut,filterObj, orderId){
        const compare = (user1, user2) => {
            let response = 0;
    
            if (filterObj.asc) {
                response = user1[orderId] > user2[orderId] ? 1 : -1
            }
            else {
                response = user1[orderId] < user2[orderId] ? 1 : -1
            }
            return response;
        }
        
        const sortUsers = Object.values(users).sort(compare).map(user => user.UserId);
        const filteredUsers = sortUsers.filter(UserId => {
            const userDate = users[UserId].EmployeeStartDate;
            const isIn = (!dateIn || (dateIn && userDate > dateIn)) && (!dateOut || (dateOut && userDate < dateOut))
            return isIn;
        },[]);
        
        return filteredUsers;
    }

    stateToprops(state){
        const {
            users,
            App: { perpage=1, page=1 },
            filters: { filterSelected, dateIn, dateOut, order:orderFilters }
        } = {...state}
        
        const filterObj = orderFilters.find(filter => filter.id === filterSelected)
        const order = this._filterUsers(users,dateIn,dateOut,filterObj, filterSelected)
        
        const indexOut = page*perpage;
        const indexIn = indexOut - perpage;
        const orderPaged = order.slice(indexIn,indexOut);
        
        return ({
            order: orderPaged,
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
    
        return(html`
            <div class="Team__list">
                ${repeat(order, (userId) => userId, (userId) => html`
                    <User id="${userId}" class="User Team__user"></User>
                `)}
            </div>
            <div class="Team__footer">
                ${maxPages > 0 ? html`
                    <div class="footer__button button--prev" @click="${(ev)=>this.onClickPrevButton(ev)}"><</div>
                    ${[...Array(maxPages)].map((x,index) => {
                        const selected = (index+1) == page ? 'button--selected' : '';
                        return(html`
                            <div class="footer__button button--page ${selected}" pageindex="${index+1}" @click="${(ev)=>this.onClickPageButton(ev)}">${index+1}</div>
                        `)
                    })}
                    <div class="footer__button button--next" @click="${(ev)=>this.onClickNextButton(ev)}">></div>
                ` : ''}
            </div>
        `)
    }
}

