const routes = [{ url: "/" }, { url: "/user" }, { url: "/user/:username" }];

function router(ev) {
    const params = getParams(location.pathname);
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

function computeParams(route, url) {
    var routeParts = route.split("/");
    var urlParts = url.split("/");
    var options = {};

    for (var i = 0, nbOfParts = routeParts.length; i < nbOfParts; i++) {
        if (urlParts[i] && ~routeParts[i].indexOf(":")) {
            options[routeParts[i].slice(1)] = urlParts[i];
        }
    }

    return options;
}

router();
