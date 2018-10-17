import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getOffset } from '../../utils.js';

export function setVisorPosition($imageSel){
    const visorPosition = getOffset($imageSel);

    dispatchAction(libActions.SET_APP_PROP, {
        visorPosition
    })
}
