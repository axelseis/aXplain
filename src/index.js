import { dispatch } from './Store/store.js';
import { initRouter, go } from './Store/router.js';
import User from './components/User/User.js';
import "./Store/router.js";
import "./Store/logger.js";

const user = new User(document.querySelector('.User'));

initRouter([
    { url: "/" },
    { url: "/user" },
    { url: "/user/:username" }
]);


