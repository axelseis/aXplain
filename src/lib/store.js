const stateEvent = new CustomEvent('state');
let reducers = [];
let reducer;

export let state = {};

export function initStore(reducerArr, initialState){
    reducers =  Array.isArray(reducerArr) ?  reducerArr : [reducerArr]
    reducer = reducerArr[0];
    state = initialState;
}

export function dispatch(action){
    state = reducer(state, action);
    document.dispatchEvent(new CustomEvent('action', {detail: action}));
}

document.addEventListener('action', function(ev){
    document.dispatchEvent(stateEvent);
}, false);
