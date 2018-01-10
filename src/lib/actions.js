
export const actions = {
    SET_LOCATION: 'SET_LOCATION'
}

export function setLocation(route, {params,props}){
    return {
        type: 'SET_LOCATION',
        location: { route, params, ...props }
    }
}

export const reducers = {
    [actions.SET_LOCATION]: (state, action) => ({
        ...state,
        router: {
            ...state.router,
            ...action.location
        }
    })
}
