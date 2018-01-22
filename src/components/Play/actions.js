import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_RIDERS: 'SET_RIDERS'
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
    [actions.SET_RIDERS]: setRiders
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

