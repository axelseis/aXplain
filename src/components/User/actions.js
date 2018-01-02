import { dispatch, dispatchError } from '../../lib/store.js';

let sessionFetch;

export function getUserSession() {
    const userSessionURL = "http://axelclaverwww.motogp.com:8080/en/xml/game/sessget/";

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
            dispatchError(tempError);
            sessionFetch = null;
        })
}

const actions = {
    SET_USER_SESSION: (session) => ({
        type: 'SET_USER_SESSION',
        session: session
    })
}

export const reducers = {
    SET_USER_SESSION: (state, action) => {
        return {
            ...state,
            user: {
                ...state.user,
                session: action.session
            }
        }
    }
}

