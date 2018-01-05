import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON, getUserInfoJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_USER_INFO: 'SET_USER_INFO',
    SET_USER_INPUTSTR: 'SET_USER_INPUTSTR',
    SET_RIDERS: 'SET_RIDERS'
}

export function getUserInfo() {
    //const userInfoFetch = getUserInfoJSON();
    getUserInfoJSON()
        .then(response => {
            dispatchAction(
                actions.SET_USER_INFO,
                response
            );
        })
        .catch(onFetchError)
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
    [actions.SET_USER_INFO]: setUserData,
    [actions.SET_USER_INPUTSTR]: setUserData,
    [actions.SET_USER_DATA]: setUserData,
    [actions.SET_RIDERS]: setRiders
}

function setUserData(state, action) {
    return ({
        ...state,
        user: {
            ...state.user,
            ...action.params
        }
    })
}

function setRiders(state, action) {
    return ({
        ...state,
        riders: action.params
    })
}

