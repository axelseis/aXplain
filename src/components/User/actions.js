import { dispatch } from '../../lib/store.js';
import { getRidersJSON, getUserInfoJSON } from '../../data/motogpAPI.js';

export function getUserInfo(){
    const userInfoFetch = getUserInfoJSON();
    userInfoFetch.then(response => {
        dispatch(actions.SET_USER_INFO(response));
    })
    .catch(err => {
        console.log("err ", err);
        throw new Error(err)
    })
}

export function getRiders(){
    ridersFetch = getRidersJSON();
    ridersFetch.then(response => {
        dispatch(actions.SET_RIDERS(response));
    })
}

const actions = {
    SET_USER_INFO: (userInfo) => ({
        type: 'SET_USER_INFO',
        user: userInfo
    }),
    SET_RIDERS: (riders) => ({
        type: 'SET_RIDERS',
        riders: riders
    })
}

export const reducers = {
    SET_USER_INFO: (state, action) => ({
        ...state,
        user: {
            ...state.user,
            ...action.user
        }
    }),
    SET_RIDERS: (state, action) => ({
        ...state,
        riders: action.riders
    })
}

