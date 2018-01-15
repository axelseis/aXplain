export function escape(str) {
    return (str + '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&#34;')
        .replace(/'/g, '&#39;')
}

export function get(url) {
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
  }

  export const _toArray = (domNodes) => [].map.call(domNodes, el => el)
  

