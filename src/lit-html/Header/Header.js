
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
        const dateIn = this.$dateIn.value;
        const dateOut = this.$dateOut.value;

        filterByDate(dateIn,dateOut)
    }

    render() {
        const minDate = new Date(this.props.minTime).toISOString().slice(0,10);
        const maxDate = new Date(this.props.maxTime).toISOString().slice(0,10);

        const inputProps = `
            type="date" 
            date-format="dd/mm/yyyy"
            min="${minDate}" 
            max="${maxDate}"
        `

        return(`
            <div class="Header__logo"></div>
            <div class="Header__filters">
                <div class="Header__filters__date">
                    <div class="date__title">EQUIPO</div>
                    <div class="date__label">Filtrar por fecha de incorporación</div>
                    <div class="date__inputs">
                        <input ${inputProps}
                            id="dateIn" 
                            class="Header__date date--in" 
                            onChange="onChangeDateInput">
                        </input>
                        <input ${inputProps}
                            id="dateOut" 
                            class="Header__date date--out" 
                            onChange="onChangeDateInput">
                        </input>
                    </div>    
                </div>
                <div class="Header__filters__order">
                    ${this.props.orderFilters.map(filter => {
                        const selected = filter.id === this.props.filterSelected ? 'property--selected' : '';
                        const icon = !selected ? 'fas fa-sort' : filter.asc ? 'fas fa-sort-up' : 'fas fa-sort-down';
                        return(`
                            <div class="Header__order ${selected}" asc="${filter.asc}" filterId="${filter.id}" onClick="onClickOrder">
                                <span class="order__title">${filter.title}</span> <i class="order__icon ${icon}"></i>
                            </div>
                        `)
                    }).join('')}
                </div>
            </div>
        `)
    }
}

