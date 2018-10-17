import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getPackageJSON } from '../../data/motogpAPI.js';

export const actions = {
    GET_PACKAGE: 'GET_PACKAGE'
}

export function getPackage() {
    getPackageJSON()
        .then(results => {
            dispatchAction(actions.GET_PACKAGE, results)
        })
}

export function setLangsMenuState(opened){
    dispatchAction(libActions.SET_APP_PROP, {
        langsOpened: opened || false
    })
}

export const reducers = {
    [actions.GET_PACKAGE]: setPackage
}

function setPackage(state, payload) {
    return ({
        ...state,
        package: {...payload}
    })
}

