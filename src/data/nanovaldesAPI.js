import { aXget } from '../lib/aXfetch.js';

const apiServer = 'http://nanovaldes.com/wp-json/wp/v2';

export function getPostsJSON() {
    return aXget(`${apiServer}/posts?per_page=100`);
}

