import { dispatchAction } from "../../lib/store.js";
import { actions as libActions } from '../../lib/actions.js';

export function setpageIndex(page) {
    dispatchAction(libActions.SET_APP_PROP, {
        page
    })
}

export function defineScrollbarWidth(scrollbarWidth = 0){
    dispatchAction(libActions.SET_APP_PROP, {
        scrollbarWidth: scrollbarWidth + 'px'
    })
}

