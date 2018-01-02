
const actions = {
    SET_LOCATION: 'SET_LOCATION',
}

export function setLocation(route, params){
    console.log("goAction: ", route);
    return {
        type: actions.SET_LOCATION,
        payload: {
            route: route,
            params: params
        }
    }
}

export function routerReducer(state, action) {
    switch(action.type) {
        case actions.SET_LOCATION:
            return {
                ...state,
                router: {
                    ...state.router,
                    ...action.payload
                }
            }
        default:
            return {...state}
    }
}

