import { state } from './store.js';

export const actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_COMPONENT_PROP: 'SET_COMPONENT_PROP',
}

export function setLocation(route, props, {...params}){
    return({
        type: actions.SET_LOCATION,
        payload: { route, ...props, params }
    })
}

export const reducers = {
    [actions.SET_LOCATION]: setRouterPayload,
    [actions.SET_COMPONENT_PROP]: setComponentPayload
}

function setComponentPayload(state, payload){
    const {componentName, ...props} = {...payload}
    return ({
        ...state,
        Components: {
            ...state.Components,
            [componentName]: {
                ...(state.Components || {})[componentName],
                ...props
            }
        }
    })
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

