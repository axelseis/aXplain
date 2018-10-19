import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getImageDataJSON } from '../../data/flickrAPI.js';

export const actions = {
    GET_IMAGE_DATA: 'GET_IMAGE_DATA',
    SET_IMAGE_LOADED: 'SET_IMAGE_LOADED'
}

let imageDataLoading;

export function getImageDetails(imageId) {
    if(imageDataLoading !== imageId){
        imageDataLoading = imageId
        
        dispatchAction(libActions.SET_APP_PROP, {
            imageDataLoading
        });
    
        getImageDataJSON(imageId)
            .then(results => {
                dispatchAction(libActions.SET_APP_PROP, {
                    imageDataLoading: null,
                    imageDataLoaded: imageId
                });
                dispatchAction(actions.GET_IMAGE_DATA, {...results.photo, ...results.sizes})
                
                imageDataLoading = ''
            })
    }
}

export function onImageLoaded(){
    dispatchAction(libActions.SET_APP_PROP, {
        imageLoaded: true
    });
}

export const reducers = {
    [actions.GET_IMAGE_DATA]: addImageData,
}

function addImageData(state, imageData) {
    return ({
        ...state,
        details: {
            ...state.details,
            [imageData.id]: imageData
        }
    })
}

