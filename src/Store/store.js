import { userReducer } from './reducers.js';

const stateEvent = new CustomEvent('state');

export let store = {
    user: {
        name: 'anonymous',
        session: null
    }
}

export function dispatch(action){
    document.dispatchEvent(new CustomEvent('action', {detail: action}));
}

document.addEventListener('action', function(ev){
    store = userReducer(store, ev.detail);
    document.dispatchEvent(stateEvent);
}, false);
