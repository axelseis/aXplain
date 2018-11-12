import { dispatchAction } from '../../lib/store.js';
import { getPostImagesJSON } from '../../data/nanovaldesAPI.js';

export const actions = {
    INIT_GET_POST_IMAGES: 'INIT_GET_POST_IMAGES__nolog',
    END_GET_POST_IMAGES: 'END_GET_POST_IMAGES__nolog',
    GET_POST_IMAGES: 'GET_POST_IMAGES'
}

export async function getPostImages(postId) {
    await dispatchAction(actions.INIT_GET_POST_IMAGES, {
        postId, 
        loading:true
    })
    const results = await getPostImagesJSON(postId)
    await dispatchAction(actions.GET_POST_IMAGES, {
        postId,
        images: results
    })
    await dispatchAction(actions.END_GET_POST_IMAGES, {
        postId, 
        loading:false,
        loaded: true
    })
}

export const reducers = {
    [actions.GET_POST_IMAGES]: setPostImages,
    [actions.INIT_GET_POST_IMAGES]: setPostImagesLoading,
    [actions.END_GET_POST_IMAGES]: setPostImagesLoading
}

function setPostImagesLoading(state, payload) {
    const {postId,loading,loaded} = {...payload};

    return ({
        ...state,
        posts: {
            ...state.posts,
            [postId]: {
                ...state.posts[postId],
                imagesLoading: loading,
                imagesLoaded: loaded
            }
        }
    })
}

function setPostImages(state, payload) {
    const {postId,images:imagesArr} = {...payload};

    const images = imagesArr.reduce((imagesObj,image) => {
        const {id, media_details:{sizes},source_url} = {...image}
        imagesObj[id] = sizes && sizes.thumbnail ? {...sizes} : {
            thumbnail: {
                source_url
            }
        }
        return imagesObj;
    },{})

    return ({
        ...state,
        posts: {
            ...state.posts,
            [postId]: {
                ...state.posts[postId],
                images: images
            }
        }
    })
}

