import { dispatch } from './store.js';

const actions = {
    SET_LOCATION: 'SET_LOCATION',
}

let routes = [];

function goAction(route){
 console.log("goAction: ", route);
    return {
        type: actions.SET_LOCATION,
        payload: {
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
