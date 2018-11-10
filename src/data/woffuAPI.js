import { isFunction } from '../lib/utils.js';

const apiServer = '/api';

function _gpFetch(url, config) {
    return fetch(url, config)
        .then(response => {
            if (response.ok) {
                const contentType = response.headers.get("Content-Type") || "";

                if (contentType.indexOf("application/json") !== -1) {
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

function _get(url, config) {
    let url2fetch = url;
    if (isFunction(url)) {
        url2fetch = url();
    }
    return _gpFetch(url2fetch, config);
}

function _post(url,params) {
    const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    return _gpFetch(url,config);
}


export function getUsersJSON() {
    return _post(`${apiServer}/getUsers`,{
        filter: [
            'UserId',
            'ImageURL',
            'Acronym',
            'FirstName',
            'LastName',
            'JobTitleId',
            'DepartmentId',
            'UserKey',
            'UsedDays',
            'AvailableDays',
            'EmployeeStartDate'
        ]    
    });
}

