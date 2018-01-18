import { state } from "../lib/store.js";
import { isFunction } from '../lib/utils.js';

const nocorsServer = window.location.hostname === "localhost" ? "https://cors-anywhere.herokuapp.com/" : "";
const apiServer = `${nocorsServer}http://game.motogp.com/`;

const API_ROUTES = window.DEV_ROUTES || {
  userInfo: () => `${apiServer}interface/get_user_info_json/${state.user.session}`,
  riders: `${apiServer}interface/get_riders_json/2017`
};

export function getUserInfoJSON() {
  return get(API_ROUTES.userInfo);
}

export function getRidersJSON() {
  return get(API_ROUTES.riders);
}

function get(url) {
  if(isFunction(url)){
    url = url();
  }
  return fetch(url)
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
};

