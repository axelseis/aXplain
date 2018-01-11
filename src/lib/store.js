let reducers = {};

export let state = {};

export function initStore(reducersArray, initialState) {
    reducers = {};
    reducersArray = Array.isArray(reducersArray) ? reducersArray : [reducersArray]
    reducersArray.forEach(reducerObj => addReducer(reducerObj))
    state = initialState;
}

export function addReducer(reducerObj) {
    Object.keys(reducerObj).forEach(key => {
        reducers[key] = reducerObj[key];
    });
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
