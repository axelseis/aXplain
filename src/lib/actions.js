
export const actions = {
    SET_LOCATION: (route,params) => ({
        type: 'SET_LOCATION',
        location: {
            route: route,
            params: params
        }
    }),
    ERROR: (error) => ({
        type: 'ON_ERROR',
        error: error
    })
}

export const reducers = {
    SET_LOCATION: (state, action) => ({
        ...state,
        router: {
            ...state.router,
            ...action.location
        }
    }),
    ON_ERROR: (state, action) => ({
        ...state,
        errors: [
            ...(state.errors || []),
            action.error
        ]
    })
}
