import { actions, dispatch } from './store.js';

let routes = [];

function goAction(route){
    return {
        type: actions.SET_LOCATION,
        data: {
            route: route,
            params: getParams(route)
        }
    }
}

export function initRouter(routesArr){
    routes = routesArr;
    dispatch(goAction(location.pathname))
}

export function go(route){
    history.pushState(null, '', route);
    dispatch(goAction(route))
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
