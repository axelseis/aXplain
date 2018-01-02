import { dispatch } from '../../lib/store.js';
import { actions as storeActions } from '../../lib/actions.js';

export function getUserSession() {
    const userSessionURL = "http://axelclaverwww.motogp.com:8080/en/xml/game/sessget/";

        fetch(userSessionURL)
            .then(response => {
                response.text()
            })
            .then(data => {
                dispatch(actions.GET_USER_SESSION(data));
            })
            .catch(err => {
                dispatch(storeActions.ERROR({
                    type: 'fetch',
                    message: `Ops, can't connect to ${userSessionURL}`
                }))
            })
}

const actions = {
    GET_USER_SESSION: (session) => ({
        type: 'GET_USER_SESSION',
        payload: {session}
    })
}

export const reducers = {
    GET_USER_SESSION: (state, action) => {
        const {session} = {...action.payload}
        return {
            ...state,
            user: {
                ...state.user,
                session: session
            }
        }
    }
}

