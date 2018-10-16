import {
    getAPIServer
} from "../utils.js";
import {
    isFunction
} from '../lib/utils.js';

const apiServer = getAPIServer();

const PROD_ROUTES = {
    literals: `${apiServer}/literals`,
    package: `${apiServer}/package`,
};

const API_ROUTES = { ...PROD_ROUTES,
    ...window.DEV_ROUTES
}

export function onFetchError(err) {
    console.log("fetch error: ", err);
}

export function getLiteralsJSON() {
    return _get(API_ROUTES.literals);
}

export function getPackageJSON() {
    return _get(API_ROUTES.package);
}

function _get(url, config) {
    if (isFunction(url)) {
        url = url();
    }
    return _gpFetch(url, config);
};

function _gpFetch(url, config) {
    return fetch(url, config)
        .then(response => {
            if (response.ok) {
                const contentType = response.headers.get("Content-Type") || "";

                if (contentType.indexOf("application/json") != -1) {
                    return response.json().catch(error => {
                        return Promise.reject(
                            new Error("Invalid JSON: " + error.message)
                        );
                    });
                }

                if (contentType.indexOf("text/html") != -1) {
                    return response
                        .text()
                        .catch(error => Promise.reject(error));
                }

                return Promise.reject(
                    new Error("Invalid content type: " + contentType)
                );
            }

            if (response.status == 404) {
                return Promise.reject(new Error("Page not found: " + url));
            }

            return Promise.reject(new Error("HTTP error: " + response.status));
        })
        .catch(error => Promise.reject(error));
}