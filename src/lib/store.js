import { reducers as libReducers } from './actions.js';

let reducers = {...libReducers};

export let state = {};

export function initStore(reducersArray, initialState) {
    if(typeof initialState !== 'object'){
        throw new Error('initialState should be an object')
    }
    if(typeof reducersArray !== 'object' && !Array.isArray(reducersArray)){
        throw new Error('initialState should be an object or an Array of objects')
    }

    reducersArray = Array.isArray(reducersArray) ? reducersArray : [reducersArray]
    reducersArray.map(reducerObj => addReducer(reducerObj))
    state = {...initialState};
}

export function addReducer(reducerObj) {
    reducers = {...reducers,...reducerObj}
}

export function dispatchAction(type, payload) {
    dispatch({type, payload})
}

export function dispatch({type,payload}) {
    if (reducers[type]) {
        state = reducers[type](state, payload);
        document.dispatchEvent(new CustomEvent('state', { detail: {type,payload} }));
    }
    else {
        throw new Error(`
            Do not exist a reducer with name ${type}
            The state will not change
        `)
    }
}
