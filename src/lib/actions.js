
export const actions = {
    SET_LOCATION: 'SET_LOCATION'
}
export function setLocation(route, {params,props}){
    return {
        type: actions.SET_LOCATION,
        params: { route, params, ...props }
    }
}

export const reducers = {
    [actions.SET_LOCATION]: (state, location) => ({
        ...state,
        router: {
            ...state.router,
            ...location
        }
    })
}
