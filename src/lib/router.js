import { state, dispatch, addReducer } from './store.js';
import { actions, reducers } from './actions.js';

let routes = [];

export function initRouter(routesArr){
    routes = routesArr;
    addReducer(reducers);
    go(location.pathname);
}

export function go(url){
    if(url && (!state.router || url !== state.router.url)){
        history.pushState(null, '', url);
        dispatch(actions.SET_LOCATION(url, getParams(url)))
    }
}

function getParams(url = '/') {
    let params, props;

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
            props = {};
            Object.keys(route).forEach(key => {
                if(key != 'url'){
                    props[key] = route[key]
                }
            })
            return {params,props}
        }
    });

    return {params,props};
}
