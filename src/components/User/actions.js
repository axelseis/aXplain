import { dispatch } from '../../lib/store.js';
import { getRidersJSON, getUserInfoJSON } from '../../data/motogpAPI.js';

export function getUserInfo() {
    //const userInfoFetch = getUserInfoJSON();
    getUserInfoJSON()
        .then(response => {
            dispatch(actions.SET_USER_INFO(response));
        })
        .catch(onFetchError)
}

function onFetchError(err) {
    console.log("fetch error: ", err);
}

export function getRiders() {
    ridersFetch = getRidersJSON();
    ridersFetch.then(response => {
        dispatch(actions.SET_RIDERS(response));
    })
}

export const actions = {
    SET_USER_INFO: (userData) => ({
        type: 'SET_USER_INFO',
        data: userData
    }),
    SET_USER_INPUTSTR: (userData) => ({
        type: 'SET_USER_INPUTSTR',
        data: userData
    }),
    SET_RIDERS: (riders) => ({
        type: 'SET_RIDERS',
        riders: riders
    })
}

function setUserData(state,action){
    return ({
        ...state,
        user: {
            ...state.user,
            ...action.data
        }
    })
}

export const reducers = {
    SET_USER_INFO: setUserData,
    SET_USER_INPUTSTR: setUserData,
    SET_USER_DATA: setUserData,
    SET_RIDERS: (state, action) => ({
        ...state,
        riders: action.riders
    })
}

