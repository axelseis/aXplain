import {actions} from './actions.js'

export function userReducer(state, action) {
    switch(action.type) {
        case actions.SET_LOCATION:
            return {
                ...state,
                router: {
                    ...state.router,
                    ...action.payload
                }
            }
        case actions.GET_USER_SESSION:
            const {session} = {...action.payload}
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

