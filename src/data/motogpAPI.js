
/** TODO: Add polyfills module
 * for separate bundle
 * and conditional loading
 */
//import 'promise-polyfill/src/polyfill';
//import 'whatwg-fetch';

import { state } from "../lib/store.js";
import { get } from '../lib/utils.js';

const env = window.env || 'prod';
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

