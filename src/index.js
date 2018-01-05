import { initStore, dispatch } from './lib/store.js';
import { initRouter, go } from './lib/router.js';
import "./lib/logger.js";

import initialState from './initialState.js';

import User from './components/User/User.js';
import Riders from './components/Riders/Riders.js';
import { reducers as userReducer } from './components/User/actions.js';

const user = new User(document.querySelector('.User'));
const riders = new Riders(document.querySelector('.League__Riders'))
const routes = [
    { url: "/",  },
    { url: "/user" },
    { url: "/user/:username" }
]

initStore(userReducer, initialState);
initRouter(routes);


