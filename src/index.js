import { initStore, dispatch } from './lib/store.js';
import { initRouter, go } from './lib/router.js';
import "./lib/logger.js";

import initialState from './initialState.js';

import League from './components/League/League.js';
import { reducers as userReducer } from './components/User/actions.js';

const league = new League(document.querySelector('.League'));

const routes = [
    { url: "/" },
    { url: "/info", component: "info" },
    { url: "/classification", component: "user" },
    { url: "/my-selection", component: "riders" },
    { url: "/user/:username" }
]

initStore(userReducer, initialState);
initRouter(routes);


