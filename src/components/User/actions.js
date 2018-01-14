import { dispatch, dispatchAction } from '../../lib/store.js';
import { getRidersJSON, getUserInfoJSON } from '../../data/motogpAPI.js';

export const actions = {
    SET_USER_INFO: 'SET_USER_INFO',
    SET_USER_INPUTSTR: 'SET_USER_INPUTSTR',
}

export function setUserInputstr(inputstr) {
    dispatchAction (
        actions.SET_USER_INPUTSTR,
        { inputstr: inputstr }
    )
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

function onFetchError(err) {
    console.log("fetch error: ", err);
}

export const reducers = {
    [actions.SET_USER_INFO]: setUserData,
    [actions.SET_USER_INPUTSTR]: setUserData,
}

function setUserData(state, params) {
    return ({
        ...state,
        user: {
            ...state.user,
            ...params
        }
    })
}