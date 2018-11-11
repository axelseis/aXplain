import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getOffset } from '../../utils.js';

export function setImageSelected($imageSel){
    const {top,left,width,height} = {...getOffset($imageSel)}
    const visorPosition = {
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
    };

    dispatchAction(libActions.SET_APP_PROP, {
        visorPosition,
        imageLoaded: false
    })
}
