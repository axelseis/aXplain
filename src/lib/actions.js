
export const actions = {
    SET_LOCATION: 'SET_LOCATION',
    SET_ROUTES: 'SET_ROUTES'
}

export function setRoutes(routesArr){
    return {
        type: actions.SET_ROUTES,
        params: { routes: routesArr }
    }
}

export function setLocation(route, {params,props}){
    return {
        type: actions.SET_LOCATION,
        params: { route, params, ...props }
    }
}

export const reducers = {
    [actions.SET_LOCATION]: setRouterParams,
    [actions.SET_ROUTES]: setRouterParams
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