export function escape(str) {
    return (str + '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&#34;')
        .replace(/'/g, '&#39;')
}

export function isDOMElement(el){
  return el instanceof Element;
}

export function isString(str){
  return typeof str === 'string' || str instanceof String;
}

export const _toArray = (domNodes) => [].map.call(domNodes, el => el)


