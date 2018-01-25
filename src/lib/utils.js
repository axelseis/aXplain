

export function addClass(el,className){
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}
export function removeClass(el,className){
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
export function hasClass(el, className){
  return el.classList.contains(className);
}

export function isDOMElement(el) {
  return el instanceof Element;
}
export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
export function isObject(val) {
  if (val === null) { return false;}
  return ( (typeof val === 'function') || (typeof val === 'object') );
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

