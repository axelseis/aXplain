import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_RIDERS: 'SET_RIDERS',
    SET_BET_ITEM: 'SET_BET_ITEM'
}

export function getRiders() {
    getRidersJSON()
        .then(response => {
            dispatchAction(
                actions.SET_RIDERS,
                response
            );
        })
        .catch(onFetchError)
}

function onFetchError(err) {
    console.log("fetch error: ", err);
}

export const reducers = {
    [actions.SET_RIDERS]: setRiders,
    [actions.SET_BET_ITEM]: setUserBetItem
}

function setRiders(state, ridersFromApi) {
    const riders = {}

    Object.keys(ridersFromApi).map(key => {
        const {rid, ...rest} = {...ridersFromApi[key]};
        riders[rid] = rest
    })

    return ({
        ...state,
        riders
    })
}

function setUserBetItem(state, payload) {
    const newUserBet = [...state.user.bets[state.season.actEvent]];
    const oldPosition = newUserBet.indexOf(payload.riderId)
    const riderSwitch = newUserBet[payload.position];

    newUserBet[payload.position] = payload.riderId;
    newUserBet[oldPosition] = riderSwitch;

    return ({
        ...state,
        user: {
            ...state.user,
            bets: {
                ...state.user.bets,
                [state.season.actEvent]: newUserBet
            }
        }
    })
}

