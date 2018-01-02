import { dispatch, addReducer } from './store.js';
import { actions, reducers } from './actions.js';

let routes = [];

export function initRouter(routesArr){
    routes = routesArr;
    addReducer(reducers);
    dispatch(actions.SET_LOCATION(location.pathname))
}

export function go(route){
    history.pushState(null, '', route);
    dispatch(actions.SET_LOCATION(route, getParams(route)))
}

function getParams(url) {
    let params;

    routes.forEach(function(route) {
        const routeReduce = route.url.replace(/(:\w+)/g, "([\\w-]+)");
        const routeMatch = url.match(`^${routeReduce}$`)

        if (!params && routeMatch) {
            const routeArr = route.url.split('/');
            const urlArr = url.split('/');
            params = {};
            for (var i = 0; i < routeArr.length; i++) {
                if (urlArr[i] && ~routeArr[i].indexOf(":")) {
                    params[routeArr[i].slice(1)] = urlArr[i];
                }
            }
        }
    });

    return { ...params };
}
