import { state } from './store.js';
import { setLocation, setRoutes } from './actions.js';

let routes = [];

export function initRouter(routesArr){
    routes = routesArr || [{url:'/'}];
    setRoutes(routesArr)
}

export function go(url2go){
    const url = url2go || state.router.routes[0].url;
    const routeMatch = _matchRoute(url);

    if(routeMatch){
        history.pushState(null, '', url);
        setLocation(url, _getParams(url, routeMatch))
    }
    else {
        throw(new Error(`${url} do not exists at routes`))
    }
}

function _matchRoute(url) {
    const routeMatch = state.router.routes.find((route) => {
        const routeReduce = route.url.replace(/(:\w+)/g, "([\\w-]+)");
        return url.match(`^${routeReduce}$`)
    })
    
    return routeMatch
}

function _getParams(url = '/', route) {
    let params, props;
    
    const routeArr = route.url.split('/');
    const urlArr = url.split('/');
    params = {};
    for (var i = 0; i < routeArr.length; i++) {
        if (urlArr[i] && ~routeArr[i].indexOf(":")) {
            params[routeArr[i].slice(1)] = urlArr[i];
        }
    }
    props = {};
    Object.keys(route).forEach(key => {
        if(key != 'url'){
            props[key] = route[key]
        }
    })
    return {params,props}
}
