import { state } from './store.js';

export const actions = {
    SET_LOCATION: 'SET_LOCATION'
}

export function setLocation(route, props, {...params}){
    return({
        type: actions.SET_LOCATION,
        payload: { route, ...props, params }
    })
}

export const reducers = {
    [actions.SET_LOCATION]: setRouterPayload,
}

function setRouterPayload(state, payload){
    return ({
        ...state,
        router: {
            ...state.router,
            ...payload
        }
    })
}

