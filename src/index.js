import { dispatch } from './Store/store.js';
import { initRouter, go } from './Store/router.js';
import User from './components/User/User.js';
import "./Store/router.js";
import "./Store/logger.js";

initRouter([
    { url: "/" },
    { url: "/user" },
    { url: "/user/:username" }
]);


const user = new User(document.querySelector('.User'));

go('/user/lalala');
