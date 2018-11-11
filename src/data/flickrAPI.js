import { aXget } from '../lib/aXfetch.js';

const apiServer = '/api';

export function getImagesJSON(searchTxt,pageNum) {
    return aXget(`${apiServer}/getImages/${searchTxt}/${pageNum}`);
}

export function getImageDataJSON(imageId) {
    return aXget(`${apiServer}/getImageData/${imageId}`);
}

