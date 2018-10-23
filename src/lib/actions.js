import { state } from './store.js';

export const actions = {
    SET_ROUTES: 'SET_ROUTES',
    SET_LOCATION: 'SET_LOCATION',
    SET_COMPONENT_PROP: 'SET_COMPONENT_PROP_nolog',
    SET_APP_PROP: 'SET_APP_PROP_nolog',
    SET_APP_PROP_LOG: 'SET_APP_PROP',
}

export function setRoutes(routes){
    return({
        type: actions.SET_ROUTES,
        payload: {routes}
    })
}

export function setLocation(url, route, params){
    return({
        type: actions.SET_LOCATION,
        payload: { url, route, params: {...params} }
    })    
}    

export const reducers = {
    [actions.SET_ROUTES]: setRouterPayload,
    [actions.SET_LOCATION]: setRouterPayload,
    [actions.SET_COMPONENT_PROP]: setComponentPayload,
    [actions.SET_APP_PROP]: setAppPayload,
    [actions.SET_APP_PROP_LOG]: setAppPayload
}

function setAppPayload(state, payload){
    return ({
        ...state,
        App: {
            ...state.App,
            ...payload
        }
    })
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

