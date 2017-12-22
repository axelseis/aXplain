import { actions, dispatch } from './store.js';

let routes = [];

export function initRouter(routesArr){
    routes = routesArr;
    console.log("routes ", routes);
}

export function go(route){
    console.log("routes ", routes);
    history.pushState(null, '', route);
    dispatch({
        type: actions.SET_LOCATION,
        data: {
            route: route,
            params: getParams(route)
        }
    })
}

function getParams(url) {
    let params;

    console.log("routes ", routes);
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
