export function aXget(url, config) {
    if (isFunction(url)) {
        url = url();
    }
    return aXfetch(url, config);
};

export function aXpost(url,params) {
    const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    return aXfetch(url,config);
}

function aXfetch(url, config) {
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