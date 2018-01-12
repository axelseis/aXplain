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
    state = {...initialState};
}

export function addReducer(reducerObj) {
    reducers = {...reducers,...reducerObj}
}

export function dispatchAction(type, params) {
    dispatch({type, params})
}

export function dispatch({type,params}) {
    if (reducers[type]) {
        state = reducers[type](state, {type,params});
        document.dispatchEvent(new CustomEvent('state', { detail: {type,params} }));
    }
    else {
        throw new Error(`
            Do not exist a reducer with name ${type}
            The state will not change
        `)
    }
}
