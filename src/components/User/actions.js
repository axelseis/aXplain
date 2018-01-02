import { dispatch } from '../../lib/store.js';

let sessionFetch;

export function getUserSession() {
    const userSessionURL = "http://axelclaverwww.motogp.com:8080/en/xml/game/sessget/";

    console.log("sessionFetch ", sessionFetch);
    sessionFetch = sessionFetch || fetch(userSessionURL)
    .then(response => {
        response.text()
    })
    .then(data => {
        dispatch(actions.SET_USER_SESSION(data));
        sessionFetch = null;
    })
    .catch(err => {
        const tempError = new Error(`${err} (${userSessionURL})`);
        sessionFetch = null;
        throw tempError;
        })
}

const actions = {
    SET_USER_SESSION: (session) => ({
        type: 'SET_USER_SESSION',
        session: session
    })
}

export const reducers = {
    SET_USER_SESSION: (state, action) => ({
        ...state,
        user: {
            ...state.user,
            session: action.session
        }
    })
}

