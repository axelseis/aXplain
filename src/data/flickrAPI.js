import { isFunction } from '../lib/utils.js';

const apiServer = 'http://localhost:3000/api';

export function getImagesJSON(searchTxt,pageNum) {
    return _get(`${apiServer}/getImages/${searchTxt}/${pageNum}`);
}

export function getImageDataJSON(imageId) {
    return _get(`${apiServer}/getImageData/${imageId}`);
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