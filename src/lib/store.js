let reducers = {};
export let state = {};

export function initStore(reducersArray, initialState) {
    if(typeof initialState !== 'object'){
        throw new Error('initialState should be an object')
    }
    if(typeof reducersArray !== 'object' && !Array.isArray(reducersArray)){
        throw new Error('initialState should be an object or an Array of objects')
    }
    reducersArray = Array.isArray(reducersArray) ? reducersArray : [reducersArray]
    reducers = reducersArray.reduce((arr,reducerObj) => ({arr,...reducerObj}),{})
    state = initialState;
}

export function addReducer(reducerObj) {
    reducers = {...reducers,...reducerObj}
}

export function dispatchAction(type, params) {
    dispatch({type, params})
}

export function dispatch(action) {
    if (reducers[action.type]) {
        state = reducers[action.type](state, action);
        document.dispatchEvent(new CustomEvent('state', { detail: action }));
    }
    else {
        throw new Error(`
            Do not exist a reducer with name ${action.type}
            The state will not change
        `)
    }
}
