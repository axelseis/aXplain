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

export function onImageClosed(){
    dispatchAction(libActions.SET_APP_PROP, {
        imageLoaded: false
    });
}

export const reducers = {
    [actions.GET_IMAGE_DATA]: addImageData,
}

function addImageData(state, imageData) {
    const {
        dates: {taken:taken}={},
        title: {_content: title}={},
        description: {_content: description}={},
        owner: {realname:name,username:owner}={},
        location: {
            neighbourhood: {_content: neighbourhood}={},
            locality: {_content: locality}={},
            country: {_content: country}={}
       }={}
        ,id,tags,size
    } = {...imageData};

    const getLocationPart = (key,sep) => key ? `${key}${sep}` : ''
    return ({
        ...state,
        details: {
            ...state.details,
            [imageData.id]: {
                taken,
                title,
                description,
                location: `${getLocationPart(neighbourhood,' - ')}${getLocationPart(locality,' - ')}${getLocationPart(country,'')}`,
                id,
                owner,
                name,
                tags,
                size
            }
        }
    })
}

