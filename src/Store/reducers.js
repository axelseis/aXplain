import {actions} from './actions.js'

export function userReducer(state, action) {
    switch(action.type) {
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

