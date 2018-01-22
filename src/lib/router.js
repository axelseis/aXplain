import { state, dispatch } from './store.js';
import { setLocation } from './actions.js';

let routes = [];

export function initRouter(routesArr){
    routes = [...routesArr] || [{url:'/'}];
}

export function go(url2go){
    let url = url2go || routes[0].url;
    const routeMatch = _matchRoute(url);

    if(routeMatch){
        const {url: urlMatch, ...props} = {...routeMatch}
        const params = _getParams(url, routeMatch.url);

        url = routeMatch.redirect || url;

        history.pushState(null, '', url);
        dispatch(setLocation(url, props, params))
    }
    else {
        const route404 = this._matchRoute('404')
        if(route404){
            go('404')
        }
        else {
            throw(new Error(`
                ${url} do not exists in routes:
                ${routes.map((route) => ` ${route.url} `).join('')}
            `))
        }
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
