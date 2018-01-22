import { state, dispatch } from './store.js';
import { setLocation, setRoutes } from './actions.js';

let routes = [];

export function initRouter(routesArr){
    routes = [...routesArr] || [{url:'/'}];
}

export function go(url2go){
    const url = url2go || routes[0].url;
    const routeMatch = _matchRoute(url);

    if(routeMatch){
        const {url: urlMatch, ...props} = {...routeMatch}
        const params = _getParams(url, routeMatch.url);

        history.pushState(null, '', url);
        dispatch(setLocation(url, props, params))
    }
    else {
        throw(new Error(`
            ${url} do not exists in routes:
            ${routes.map((route) => ` ${route.url} `).join('')}
        `))
    }
}

function _matchRoute(url) {
    const routeMatch = routes.find((route) => {
        const routeReduce = route.url.replace(/(:\w+)/g, "([\\w-]+)");
        return url.match(`^${routeReduce}$`)
    })

    return routeMatch
}

function _getParams(url, urlMatch){
    const urlMatchArr = urlMatch.split('/');
    const urlArr = url.split('/');
    let params = {};

    for (var i = 0; i < urlMatchArr.length; i++) {
        if (urlArr[i] && ~urlMatchArr[i].indexOf(":")) {
            params[urlMatchArr[i].slice(1)] = urlArr[i];
        }
    }

    return params
}
