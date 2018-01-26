import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_RIDERS: 'SET_RIDERS',
    SET_BET_ITEM: 'SET_BET_ITEM',
    SET_BET: 'SET_BET'
}

export function getRiders() {
    getRidersJSON()
        .then(response => {
            dispatchAction(
                actions.SET_RIDERS,
                { riders: response }
            );
        })
        .catch(onFetchError)
}

function onFetchError(err) {
    console.log("fetch error: ", err);
}

export const reducers = {
    [actions.SET_RIDERS]: setRiders,
    [actions.SET_BET]: setUserBet
}

function setRiders(state, payload) {
    const riders = {}
    const initOrder = []
    Object.keys(payload.riders).map(key => {
        const {rid, ...rest} = {...payload.riders[key]};
        riders[rid] = rest;
        initOrder.push(parseInt(rid))
    })
    return ({
        ...state,
        riders,
        ridersOrders: {
            ...state.ridersOrders,
            initOrder
        } 
    })
}

function setUserBet(state, payload) {
    const { bet, ridersOrder } = { ...payload };
    const { actOrder, initOrder } = { ...state.ridersOrders }
    const newOrder = ridersOrder || actOrder || initOrder;
    
    return ({
        ...state,
        ridersOrders: {
            ...state.ridersOrders,
            actOrder: newOrder
        },
        user: {
            ...state.user,
            bets: {
                ...state.user.bets,
                [state.season.actEvent]: [...bet]
            }
        }
    })
}

