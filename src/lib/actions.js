import { dispatch } from './store.js';

export const actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ROUTES: 'SET_ROUTES',
    SET_COMPONENT_PROP: 'SET_COMPONENT_PROP'
}


export function setComponentProp(componentName, props){
    dispatch({
        type: actions.SET_COMPONENT_PROP,
        params: { componentName, ...props }
    })
}

export function setRoutes(routesArr){
    dispatch({
        type: actions.SET_ROUTES,
        params: { routes: routesArr }
    })
}

export function setLocation(route, {params,props}){
    dispatch({
        type: actions.SET_LOCATION,
        params: { route, params, ...props }
    })
}

export const reducers = {
    [actions.SET_LOCATION]: setRouterParams,
    [actions.SET_ROUTES]: setRouterParams,
    [actions.SET_COMPONENT_PROP]: setComponentParams
}

function setRouterParams(state, params){
    return ({
        ...state,
        router: {
            ...state.router,
            ...params
        }
    })
}

function setComponentParams(state, params){
    return ({
        ...state,
        [params.componentName]: {
            ...state[params.componentName],
            ...params
        }
    })
}