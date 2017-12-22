import { dispatch, actions } from './store.js';

export function getUserSession() {
    const userSessionURL = "http://axelclaverwww.motogp.com:8080/es/xml/game/sessget/";

    fetch(userSessionURL)
        .then(response => response.text())
        .then(data => {
            dispatch({
                type: actions.GET_USER_SESSION,
                data: {
                    session: data
                }
            })
        })
}
