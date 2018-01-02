import { dispatch } from '../../lib/store.js';

export const actions = {
    GET_USER_SESSION: 'GET_USER_SESSION'
}

export function getUserSession() {
    const userSessionURL = "http://axelclaverwww.motogp.com:8080/en/xml/game/sessget/";

    fetch(userSessionURL)
        .then(response => response.text())
        .then(data => {
            dispatch({
                type: actions.GET_USER_SESSION,
                payload: {
                    session: data
                }
            })
        })
}

export function reducer(state, action) {
    switch(action.type) {
        case actions.GET_USER_SESSION:
            const {session} = {...action.payload}
            return {
                ...state,
                user: {
                    ...state.user,
                    session: session
                }
            }
        default:
            return {...state}
    }
}

