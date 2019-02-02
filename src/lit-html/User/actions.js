
import { dispatchAction } from '../../lib/store.js';


export const actions = {
    SET_USER_PROPERTY: 'SET_USER_PROPERTY'
}

export function setImageError(UserId) {
    dispatchAction(actions.SET_USER_PROPERTY, {
        UserId,
        imageError: true
    })
}

export const reducers = {
    [actions.SET_USER_PROPERTY]: setUserProperty
}

function setUserProperty(state, payload) {
    const {UserId,...properties} = {...payload};

    return({
        ...state,
        users: {
            ...state.users,
            [UserId]: {...state.users[UserId],...properties}
        }
    })
}

