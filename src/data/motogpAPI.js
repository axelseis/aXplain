
const env = window.location.hostname === 'localhost' ? 'dev' : 'prod';
const apiServer = env === 'dev' ? './json/' : 'http://axelclaverwww.motogp.com:8080/en/';

const endpoints = {
  userInfo: {
    dev: 'get_user_info.jsonee',
    prod: 'interface/get_user_info_json'
  },
  riders: {
    dev: 'get_riders.json',
    prod: 'interface/get_riders_json/2017'
  }
}

export function getUserInfoJSON() {
  const userInfoURL = apiServer + endpoints.userInfo[env];
  return get(userInfoURL)
}

export function getRidersJSON() {
  const ridersURL = apiServer + endpoints.riders[env];
  return get(ridersURL).catch(onFetchError(err))
}

function get(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      const contentType = response.headers.get('Content-Type') || '';

      if (contentType.includes('application/json')) {
        return response.json().catch(error => {
          return Promise.reject(new Error('Invalid JSON: ' + error.message));
        });
      }

      if (contentType.includes('text/html')) {
        return response.text().then(html => {
          return {
            page_type: 'generic',
            html: html
          };
        })
        .catch(error => Promise.reject(error))
      }

      return Promise.reject(new Error('Invalid content type: ' + contentType));
    }

    if (response.status == 404) {
      return Promise.reject(new Error('Page not found: ' + url));
    }

    return Promise.reject(new Error('HTTP error: ' + response.status));
  })
  .catch(error => Promise.reject(error));
}
