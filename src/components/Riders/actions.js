import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_FILTER: 'SET_FILTER',
    SET_RIDERS: 'SET_RIDERS'
}

export function setFilterValue(filterValue){
    dispatchAction (
        actions.SET_FILTER,
        { filter: filterValue }
    )
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
    [actions.SET_FILTER]: setUserData,
    [actions.SET_RIDERS]: setRiders
}

function setUserData(state, userData) {
    return ({
        ...state,
        user: {
            ...state.user,
            ...userData
        }
    })
}

function setRiders(state, riders) {
    return ({
        ...state,
        riders: riders
    })
}

