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

export function onImageLoaded(imageUrl){
    dispatchAction(actions.SET_IMAGE_LOADED, imageUrl);
}

export const reducers = {
    [actions.GET_IMAGE_DATA]: addImageData,
    [actions.SET_IMAGE_LOADED]: setImageLoaded
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

function setImageLoaded(state, imageUrl) {
    const imagesLoaded = [...(state.imagesLoaded || [])];
    
    if(imagesLoaded.indexOf(imageUrl) == -1){
        imagesLoaded.push(imageUrl);
    }

    return ({
        ...state,
        imagesLoaded
    })
}

