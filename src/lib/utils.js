export function isDOMElement(el) {
  return el instanceof Element;
}

export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

export function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

export function escape(str) {
  return (str + '')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&#34;')
      .replace(/'/g, '&#39;')
}

