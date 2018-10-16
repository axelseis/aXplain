import { initStore } from './lib/store.js';
import { initRouter } from './lib/router.js';
import "./lib/logger.js";

import {initialState} from './initialState.js';
import Gallery from './components/Gallery/Gallery.js';

import { reducers as GalleryReducer } from './components/Gallery/actions.js';

const routes = [
    { url: "/" },
    { url: "/Image/:imageId" },
    { url: "404", redirect: "/" }
]

export default function initGallery(){
    initStore([GalleryReducer], initialState);
    initRouter(routes, BASE_URL || '');

    const gallery = new Gallery('Gallery');
}

document.addEventListener('DOMContentLoaded', initGallery)
