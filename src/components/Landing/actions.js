import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction, state } from '../../lib/store.js';
import { getLiteralsJSON } from '../../data/motogpAPI.js';
import { getMousePosition, getWindowSize } from '../../utils.js';

export const actions = {
    GET_LITERALS: 'GET_LITERALS'
}

export const modes = {
    DESKTOP: 'desktop',
    MOBILE: 'mobile'
}

export function getLiterals() {
    const offer = 'offer data at window';
    
    getLiteralsJSON()
        .then(results => {
            dispatchAction(actions.GET_LITERALS, results)

        })
}

export function setWindowSize(){
    const windowSize = getWindowSize();

    dispatchAction(libActions.SET_APP_PROP, {
        winW: windowSize.width,
        winH: windowSize.height,
        mode: windowSize.width > 767 ? modes.DESKTOP : modes.MOBILE 
    })
}

export function setMousePosition(ev){
    dispatchAction(libActions.SET_APP_PROP, {
        mouse: getMousePosition(ev)
    })
}

export function setNextFrame(){
    dispatchAction(libActions.SET_APP_PROP, {
        nextFrame: ((state.App && state.App.nextFrame) || 0) + 1
    })
}

export function setSectionBackLoaded(sectionName, imageRatio){
    dispatchAction(libActions.SET_COMPONENT_PROP, {
        componentName: sectionName,
        backLoaded: true,
        imageRatio
    })
}

export const reducers = {
    [actions.GET_LITERALS]: setLiterals
}

function setLiterals(state, payload) {
    return ({
        ...state,
        literals: {...payload}
    })
}

