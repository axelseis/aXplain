import { initStore, dispatch } from './lib/store.js';
import { initRouter, go } from './lib/router.js';
import "./lib/logger.js";

import {initialState} from './initialState.js';

import League from './components/League/League.js';
import { reducers as resultsReducer } from './components/Results/actions.js';
import { reducers as playReducer } from './components/Play/actions.js';

const routes = [
    { url: "/", component: "info" },
    { url: "/info", component: "info" },
    { url: "/results/", component: "results" },
    { url: "/play", component: "play" },
    { url: "404", redirect: "/" }
]

initStore([resultsReducer,playReducer], initialState);
initRouter(routes);

const league = new League('League');

go(location.pathname);


