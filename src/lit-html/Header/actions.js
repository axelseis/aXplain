import { dispatchAction } from "../../lib/store.js";

export const actions = {
    SET_ORDER_FILTER: 'SET_ORDER_FILTER',
    SET_DATE_FILTER: 'SET_DATE_FILTER'
}

export function sortByOrder(orderId, asc = false) {
    dispatchAction(actions.SET_ORDER_FILTER, {
        orderId,
        asc
    })
}

export function filterByDate(dateIn, dateOut) {
    dispatchAction(actions.SET_DATE_FILTER, {
        dateIn,
        dateOut
    })
}

export const reducers = {
    [actions.SET_ORDER_FILTER]: setOrderFilter,
    [actions.SET_DATE_FILTER]: setDateFilter
}

function setDateFilter(state, payload) {
    const {dateIn=0, dateOut} = {...payload};

    return ({
        ...state,
        filters: {
            ...state.filters,
            dateIn,
            dateOut
        }
    })
}

function setOrderFilter(state, payload) {
    const { orderId } = { ...payload };
    
    const filters = [...state.filters.order];
    const filterSel = filters.find(filter => filter.id === orderId);
    filterSel.asc = !filterSel.asc;

    return ({
        ...state,
        filters: {
            ...state.filters,
            filterSelected: orderId
        }
    })
}
