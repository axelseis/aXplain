
export const actions = {
    SET_LOCATION: (route, {params,props}) => ({
        type: 'SET_LOCATION',
        location: { route, params, ...props }
    })
}

export const reducers = {
    SET_LOCATION: (state, action) => ({
        ...state,
        router: {
            ...state.router,
            ...action.location
        }
    })
}
