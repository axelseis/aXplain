import { isFunction } from '../lib/utils.js';

function getAPIServer() {
    const key = '361410381e0bb1885ee6ad24c0348007';
    const method = 'flickr.photos.search';
    const format = 'json';
    const text = "archdaily";
    const atts = '?sort=relevance&parse_tags=1&content_type=7&lang=es-US&text=archdaily&viewerNSID=&csrf=&hermes=1&hermesClient=1&reqId=4a394135&nojsoncallback=1'
    return `https://www.flickr.com/services/rest/${atts}&text=${text}&method=${method}&format=${format}&api_key=${key}`;
}

const apiServer = getAPIServer();

const PROD_ROUTES = {
    photos: `${apiServer}&extras=owner_name,url_sq, url_t, url_s, url_q, url_m, url_l`
};

const API_ROUTES = { ...PROD_ROUTES,
    ...window.DEV_ROUTES
}

export function onFetchError(err) {
    console.log("fetch error: ", err);
}

export function getImagesJSON(page) {
    return _get(`${API_ROUTES.photos}&page=${page||1}`);
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

                if (contentType.indexOf("text/html") != -1 || contentType.indexOf("text/javascript") != -1) {
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