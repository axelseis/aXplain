import { initStore, dispatch } from './lib/store.js';
import { initRouter, go } from './lib/router.js';
import "./lib/logger.js";

import initialState from './initialState.js';

import League from './components/League/League.js';
import { reducers as userReducer } from './components/User/actions.js';
import { reducers as ridersReducer } from './components/Riders/actions.js';

const league = new League(document.querySelector('.League'));

const routes = [
    { url: "/", component: "info" },
    { url: "/info", component: "info" },
    { url: "/classification", component: "user" },
    { url: "/my-selection", component: "riders" },
    { url: "/user/:username" }
]

initStore([userReducer,ridersReducer], initialState);
initRouter(routes);


