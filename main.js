import { initStore } from './src/lib/store.js';
import { initRouter } from './src/lib/router.js';
import "./src/lib/logger.js";

import {initialState} from './src/initialState.js';
import Gallery from './src/components/Gallery/Gallery.js';
import Visor from './src/components/Visor/Visor.js';

import { reducers as GalleryReducer } from './src/components/Gallery/actions.js';
import { reducers as VisorReducer } from './src/components/Visor/actions.js';

const routes = [
    { url: "/" },
    { url: "/images/:imageId" },
    { url: "404", redirect: "/" }
]

export default function initGallery(){
    initStore([GalleryReducer,VisorReducer], initialState);
    initRouter(routes, BASE_URL || '');

    const gallery = new Gallery('Gallery');
    const visor = new Visor('Visor');
}

document.addEventListener('DOMContentLoaded', initGallery)
