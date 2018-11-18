import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction } from '../../lib/store.js';
import { getPostsJSON, getPageJSON } from '../../data/nanovaldesAPI.js';

export const actions = {
    GET_POSTS: 'GET_POSTS',
    GET_EXHIBITIONS: 'GET_EXHIBITIONS'
}

export async function getPosts() {
    await dispatchAction(libActions.SET_APP_PROP, {
        loadingPosts: true
    })
    const results = await getPostsJSON()
    await dispatchAction(libActions.SET_APP_PROP, {
        loadingPosts: false,
    })
    await dispatchAction(actions.GET_POSTS, results)
}

export async function getExhibitionsPage() {
    await dispatchAction(libActions.SET_APP_PROP, {
        loadingExhibitions: true
    })
    const results = await getPageJSON(5)
    await dispatchAction(actions.GET_EXHIBITIONS, results)
    await dispatchAction(libActions.SET_APP_PROP, {
        loadingExhibitions: false,
    })
}

export const reducers = {
    [actions.GET_POSTS]: setPosts,
    [actions.GET_EXHIBITIONS]: setExhibitions
}

function setPosts(state, payload = []) {
    const postsOrder = payload.map(post => post.slug)
    const posts = payload.reduce((postsObj,post) => {
        const {
            id,
            slug,
            content:{rendered:content},
            date,
            excerpt:{rendered:excerpt},
            title:{rendered:title},
            featured_media,
            _embedded
        } = {...post}
        
        const {media_details:{sizes},source_url} = {..._embedded['wp:featuredmedia'][0]}
        const featuredMedia = sizes && sizes.thumbnail ? sizes : {
            thumbnail: {
                source_url
            }
        };
        postsObj[slug] = {
            id,slug,content,date,excerpt,title,featured_media,
            images: {
                [featured_media]: {...featuredMedia}
            }
        }
        return postsObj
    },{})

    return ({
        ...state,
        postsOrder: postsOrder || [],
        posts: posts || {}
    })
}

function setExhibitions(state, payload = {}) {
    const {content:{rendered:exhibitions}} = {...payload}
    return ({
        ...state,
        exhibitions,
    })
}

