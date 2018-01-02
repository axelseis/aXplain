const stateEvent = new CustomEvent('state');
let reducer;

export let state = {};

export function initStore(reducerObj, initialState){
    reducer = reducerObj;
    state = initialState;
}

export function dispatch(action){
    document.dispatchEvent(new CustomEvent('action', {detail: action}));
}

document.addEventListener('action', function(ev){
    state = reducer(state, ev.detail);
    document.dispatchEvent(stateEvent);
}, false);
