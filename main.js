import { initStore } from './src/lib/store.js';
import { initRouter } from './src/lib/router.js';
import "./src/lib/logger.js";

import {initialState} from './src/initialState.js';
import Gallery from './src/components/Gallery/Gallery.js';

import { reducers as GalleryReducer } from './src/components/Gallery/actions.js';

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
