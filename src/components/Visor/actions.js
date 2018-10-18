import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getImageDataJSON } from '../../data/flickrAPI.js';

export const actions = {
    GET_IMAGE_DATA: 'GET_IMAGE_DATA'
}

let imageDataLoading;

export function getImageData(imageId) {
    if(imageDataLoading !== imageId){
        imageDataLoading = imageId
        
        dispatchAction(libActions.SET_APP_PROP, {
            imageDataLoading
        });
    
        getImageDataJSON(imageId)
            .then(results => {
                dispatchAction(actions.GET_IMAGE_DATA, results.photo)
                dispatchAction(libActions.SET_APP_PROP, {
                    imageDataLoading,
                    imageDataLoaded: imageId
                });
                
                imageDataLoading = ''
            })
    }
}

export const reducers = {
    [actions.GET_IMAGE_DATA]: addImageData
}

function addImageData(state, imageData) {
    const images = {...state.images}
    /*
    const images = [...state.images].map(image => {
        if(image.id === imageData.id){
            return {
                imageData, ...image,
                __extData: true
            };
        }
        else {
            return image;
        }
    });
    */
    images[imageData.id] = {
        ...images[imageData.id],
        __EXT: imageData
    }
    
    return ({
        ...state,
        images
    })
}

