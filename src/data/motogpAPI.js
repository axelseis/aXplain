import { state } from "../lib/store.js";

const nocorsServer = window.location.hostname === "localhost" ? "https://cors-anywhere.herokuapp.com/" : "";
const apiServer = env && env === "dev" ? "./json/" : `${nocorsServer}http://game.motogp.com/`;

const endpoints = {
    userInfo: () => ({
        dev: "get_user_info.json",
        prod: `interface/get_user_info_json/${state.user.session}`
    }),
    riders: {
        dev: "get_riders.json",
        prod: "interface/get_riders_json/2017"
    }
};

export function getUserInfoJSON() {
    const userInfoURL = apiServer + endpoints.userInfo()[env];
    return get(userInfoURL);
}

export function getRidersJSON() {
    const ridersURL = apiServer + endpoints.riders[env];
    return get(ridersURL);
}

function get(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                const contentType = response.headers.get("Content-Type") || "";

                if (contentType.includes("application/json")) {
                    return response.json().catch(error => {
                        return Promise.reject(
                            new Error("Invalid JSON: " + error.message)
                        );
                    });
                }

                if (contentType.includes("text/html")) {
                    return response
                        .text()
                        .then(html => {
                            return {
                                page_type: "generic",
                                html: html
                            };
                        })
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
