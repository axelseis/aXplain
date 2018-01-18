import { state } from './store.js';

export const actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ROUTES: 'SET_ROUTES',
    SET_COMPONENT_PROP: 'SET_COMPONENT_PROP',
    INIT_COMPONENT: 'INIT_COMPONENT',
    REMOVE_COMPONENT: 'REMOVE_COMPONENT'
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
    [actions.INIT_COMPONENT]: initComponent,
    [actions.REMOVE_COMPONENT]: removeComponent,
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

function initComponent(state, payload){
    const {componentName} = {...payload}
    const restComponents = {...state.Components}

    return ({
        ...state,
        Components: {
            ...restComponents,
            [componentName]: {inited: true}
        }
    })
}

function removeComponent(state, payload){
    const {componentName} = {...payload}
    const {[componentName]: component, ...restComponents} = {...state.Components}
    //delete restComponents[componentName]

    return ({
        ...state,
        Components: {...restComponents}
    })
}
