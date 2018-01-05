const stateEvent = new CustomEvent('state');
let reducers = {};
let reducer;

export let state = {};

export function initStore(reducersArray, initialState) {
    reducersArray = Array.isArray(reducersArray) ? reducersArray : [reducersArray]
    reducersArray.forEach(reducerObj => addReducer(reducerObj))
    reducer = reducersArray[0];
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
    if (!reducers[action.type]) {
        throw new Error(`
            Do not exist a reducer with name ${action.type}
            The state will not change
        `)
    }
    state = reducers[action.type] ? reducers[action.type](state, action) : state;
    document.dispatchEvent(new CustomEvent('state', { detail: action }));
}
