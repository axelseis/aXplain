import { initStore } from './src/lib/store.js';
import { initRouter } from './src/lib/router.js';
import "./src/lib/logger.js";

import {initialState} from './src/initialState.js';

import Header from './src/components/Header/Header.js';
import Landing from './src/components/Landing/Landing.js';
import Footer from './src/components/Footer/Footer.js';

import { reducers as LandingReducer } from './src/components/Landing/actions.js';
import { reducers as HeaderReducer } from './src/components/Header/actions.js';

const routes = [
    { url: "/", redirect: "/Enjoy" },
    { url: "/Enjoy" },
    { url: "/Feed" },
    { url: "/Multiscreen" },
    { url: "/Highlights" },
    { url: "/Quality" },
    { url: "/Replay" },
    { url: "/Sound" },
    { url: "/Nospoiler" },
    { url: "/Library" },
    { url: "/Devices" },
    { url: "404", redirect: "/" }
]

export default function initLanding(){
    initStore([LandingReducer, HeaderReducer], initialState);
    initRouter(routes, BASE_URL || '');

    const header = new Header('Landing__Header');
    const landing = new Landing('Landing__content');
    const footer = new Footer('Landing__Footer');
}

document.addEventListener('DOMContentLoaded', initLanding)
