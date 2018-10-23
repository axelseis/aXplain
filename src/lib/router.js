import { state, dispatch } from './store.js';
import { setLocation, setRoutes } from './actions.js';

let routes = [];
let BASE_URL = '';

export function initRouter(routesArr, BASE_URL){
    BASE_URL = BASE_URL || '';
    routes = [...routesArr] || [{url:'/'}];
    dispatch(setRoutes(routes));
    setStateLocation(window.location.pathname);
}

export function go(url2go, addToHistory = true){
    if(url2go !== state.router.url && setStateLocation(url2go)){
        const func = addToHistory ? 'pushState' : 'replaceState';
        history[func](null, '', BASE_URL + state.router.url);
    }
}

export function goOut(url2go, newTab){
    if(newTab){
        window.open(url2go, '_system');
    }
    else {
        location.assign(url2go);
    }
}

function setStateLocation(url2go){
    let url = url2go || routes[0].url;
    const routeMatch = _matchRoute(url);

    if(routeMatch){
        if(routeMatch.redirect){
            go(routeMatch.redirect)
            return false;
        }
        const {...props} = {...routeMatch}
        const params = _getParams(url, routeMatch.url);

        dispatch(setLocation(url, routeMatch.url, params))

        return true;
    }
    else {
        const route404 = _matchRoute('404')
        if(route404){
            setStateLocation('404')
        }
        else {
            throw(new Error(`
                ${url} do not exists in routes:
                ${routes.map((route) => ` ${route.url} `).join('')}
            `))
        }

        return false
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

window.onpopstate = (ev) => {
    setStateLocation(window.location.pathname)
}