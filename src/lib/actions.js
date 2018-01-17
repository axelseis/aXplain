import { state } from './store.js';

export const actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ROUTES: 'SET_ROUTES',
    SET_COMPONENT_PROP: 'SET_COMPONENT_PROP',
    INIT_COMPONENT: 'INIT_COMPONENT'
}

export function initComponent(componentName){
    return({
        type: actions.INIT_COMPONENT,
        payload: { componentName, inited: true }
    })
}

export function setComponentProp(componentName, props){
    return({
        type: actions.SET_COMPONENT_PROP,
        payload: { componentName, ...props }
    })
}

export function setRoutes(routesArr){
    return({
        type: actions.SET_ROUTES,
        payload: { routes: routesArr }
    })
}

export function setLocation(route, {params,props}){
    return({
        type: actions.SET_LOCATION,
        payload: { route, params, ...props }
    })
}

export const reducers = {
    [actions.SET_LOCATION]: setRouterPayload,
    [actions.SET_ROUTES]: setRouterPayload,
    [actions.INIT_COMPONENT]: setComponentPayload,
    [actions.SET_COMPONENT_PROP]: setComponentPayload
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
