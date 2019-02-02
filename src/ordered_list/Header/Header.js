import { html } from '../../lib/lit-html/lit-html.js';

import Component from '../../lib/Component.js'
import { sortByOrder, filterByDate } from './actions.js';

export default class Header extends Component {
    constructor(className) {
        super(className);
    }
    
    stateToprops(state){
        const {
            filters: {order=[], filterSelected, minTime=0, maxTime=0}
        } = {...state};

        return ({
            orderFilters: order,
            filterSelected,
            minTime,
            maxTime
        })
    }

    onClickOrder(ev) {
        ev.stopPropagation();
        const filterId = ev.currentTarget.getAttribute('filterId');

        sortByOrder(filterId);
    }
    
    onChangeDateInput(ev) {
        const dateIn = ev.currentTarget.value;
        const dateOut = ev.currentTarget.value;

        filterByDate(dateIn,dateOut)
    }

    render() {
        const minDate = new Date(this.props.minTime).toISOString().slice(0,10);
        const maxDate = new Date(this.props.maxTime).toISOString().slice(0,10);

        const dateInput = (id,className) => html`
            <input id="${id}"    
                class="${className}" 
                type="date" 
                date-format="dd/mm/yyyy"
                min="${minDate}" 
                max="${maxDate}"
                @change="${(ev)=>this.onChangeDateInput(ev)}"
            />
        `;

        return(html`
            <div class="Header__logo"></div>
            <div class="Header__filters">
                <div class="Header__filters__date">
                    <div class="date__title">EQUIPO</div>
                    <div class="date__label">Filtrar por fecha de incorporación</div>
                    <div class="date__inputs">                            
                        ${dateInput('dateIn', 'Header__date date--in')}
                        ${dateInput('dateOut', 'Header__date date--out')}
                    </div>    
                </div>
                <div class="Header__filters__order">
                    ${this.props.orderFilters.map(filter => {
                        const selected = filter.id === this.props.filterSelected ? 'property--selected' : '';
                        const icon = !selected ? 'fas fa-sort' : filter.asc ? 'fas fa-sort-up' : 'fas fa-sort-down';
                        return(html`
                            <div class="Header__order ${selected}" asc="${filter.asc}" filterId="${filter.id}" @click="${(ev)=>this.onClickOrder(ev)}">
                                <span class="order__title">${filter.title}</span> <i class="order__icon ${icon}"></i>
                            </div>
                        `)
                    })}
                </div>
            </div>
        `)
    }
}

