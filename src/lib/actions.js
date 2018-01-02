
export const actions = {
    SET_LOCATION: (route, params = {}) => ({
        type: 'SET_LOCATION',
        location: { route, params }
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
