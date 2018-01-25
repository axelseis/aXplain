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
    [actions.SET_BET]: setUserBet,
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
    const actBet = state.user.bets[state.season.actEvent];
    let newUserBet
    
    if(payload.insertRider){
        newUserBet = [...actBet.filter(riderId => !!riderId)]
        const oldPosition = newUserBet.indexOf(payload.riderId)
        newUserBet.splice(oldPosition,1)
        newUserBet.splice(payload.position, 0, payload.riderId)
        const riders = Object.keys(state.riders).filter(
            riderId => newUserBet.indexOf(parseInt(riderId)) === -1
        )
        let iR = 0;
        while(newUserBet.length < 15){
            newUserBet.push(parseInt(riders[iR++]));
        }
    }
    else {        
        newUserBet = [...actBet];
        const oldPosition = newUserBet.indexOf(payload.riderId)
        const riderSwitch = newUserBet[payload.position];
        newUserBet[payload.position] = payload.riderId;
        newUserBet[oldPosition] = riderSwitch;
    }

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

function setUserBet(state, payload) {
    return ({
        ...state,
        user: {
            ...state.user,
            bets: {
                ...state.user.bets,
                [state.season.actEvent]: [...payload.bet]
            }
        }
    })
}

