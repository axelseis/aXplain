import {actions} from './store.js'

export function userReducer(state, action) {
    switch(action.type) {
        case actions.SET_LOCATION:
            return {
                ...state,
                router: {
                    ...state.router,
                    ...action.data
                }
            }
        case actions.GET_USER_SESSION:
            const {session} = {...action.data}
            return {
                ...state,
                user: {
                    ...state.user,
                    session: session
                }
            }
        default:
            return {...state}
    }
}

