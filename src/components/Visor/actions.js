import { dispatchAction } from '../../lib/store.js';
import { getImageDataJSON } from '../../data/flickrAPI.js';

export const actions = {
    GET_IMAGE_DATA: 'GET_IMAGE_DATA'
}

export function getImageData() {
    getImageDataJSON()
        .then(results => {
            dispatchAction(actions.GET_IMAGE_DATA, results)
        })
}

export const reducers = {
    [actions.GET_IMAGE_DATA]: addImageData
}

function addImageData(state, imageData) {
    return ({
        ...state,
        images: {...state.images, imageData}
    })
}

