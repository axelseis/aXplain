import { actions as libActions } from '../../lib/actions.js'
import { dispatchAction, state } from '../../lib/store.js';
import { getPostsJSON } from '../../data/nanovaldesAPI.js';

export const actions = {
    GET_POSTS: 'GET_POSTS'
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

export const reducers = {
    [actions.GET_POSTS]: setPosts
}

function setPosts(state, payload = []) {
    const postsOrder = payload.map(post => post.id)
    const posts = payload.reduce((postsObj,post) => {
        const {
            id,
            slug,
            content:{rendered:content},
            date,
            excerpt:{rendered:excerpt},
            title:{rendered:title},
            featured_media
        } = {...post}
        postsObj[id] = {
            id,slug,content,date,excerpt,title,featured_media
        }
        return postsObj
    },{})

    return ({
        ...state,
        postsOrder: postsOrder || [],
        posts: posts || {}
    })
}

