import { initStore, dispatch } from './lib/store.js';
import { initRouter, go } from './lib/router.js';
import "./lib/logger.js";

import User from './components/User/User.js';
import { userReducer } from './components/User/reducers.js';

const initialState = {
    user: {
        name: 'anonymous',
        session: ''
    }
}

const user = new User(document.querySelector('.User'));

initStore(userReducer, initialState);

initRouter([
    { url: "/",  },
    { url: "/user" },
    { url: "/user/:username" }
]);


