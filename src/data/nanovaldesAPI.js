import { aXget } from '../lib/aXfetch.js';

const apiServer = 'https://nanovaldes.com/wp-json/wp/v2';

export function getPostsJSON() {
    return aXget(`${apiServer}/posts?per_page=100&_embed`);
}

export function getPostImagesJSON(postId) {
    return aXget(`${apiServer}/media?parent=${postId}`);
}

export function getPageJSON(pageId) {
    return aXget(`${apiServer}/pages/${pageId}`);
}

