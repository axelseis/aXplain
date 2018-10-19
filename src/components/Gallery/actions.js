import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction, state } from '../../lib/store.js';
import { getImagesJSON } from '../../data/flickrAPI.js';
import { getOffset, getWindowSize } from '../../utils.js';

export const actions = {
    GET_IMAGES: 'GET_IMAGES'
}

export const modes = {
    DESKTOP: 'desktop',
    MOBILE: 'mobile'
}

const searchText = 'archDaily';

export function getImages(page) {
    dispatchAction(libActions.SET_APP_PROP, {
        pageLoading: page
    })
    getImagesJSON(searchText,page)
        .then(results => {
            dispatchAction(libActions.SET_APP_PROP, {
                pageLoading: null,
            })
            dispatchAction(actions.GET_IMAGES, results.photos)
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

export function setScrollPos(clip){
    const offset = getOffset(clip);
    const winH = getWindowSize().height
    
    if(offset.top + offset.height < winH*1.9){
        const nextPage = state.page+1;
        if(nextPage !== (state.App||[]).pageLoading){
            getImages(nextPage)
        }
    }
}

export const reducers = {
    [actions.GET_IMAGES]: setImages
}

function setImages(state, payload) {
    const {photo: images, page, perpage} = {...payload}
    const imagesNew = Object.values(images);
    return ({
        ...state,
        images: [...state.images,...imagesNew],
        page,
        perpage
    })
}

