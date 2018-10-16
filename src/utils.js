const isAxelServer = true;

export function getAPIServer() {
    const key = '361410381e0bb1885ee6ad24c0348007';
    const method = 'flickr.photos.search';
    const format = 'json';
    const text = "archdaily";

    return `https://www.flickr.com/services/rest/?method=${method}&format=${format}&text=${text}&api_key=${key}&nojsoncallback=?`;
}

export function getAssetsFolder(){
    return window.ASSETS_FOLDER || './';
}

export function getWindowSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

export function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        top: rect.top,
        left: rect.left + document.body.scrollLeft,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    }
}

export function getDevicePixelRatio() {
    return parseInt(window.devicePixelRatio || 1);
}

export function parseStringToHTML(str) {
    const txt = (str || '').toString()
    .replace(/"/g, "'")
    .replace(/'/g, '&apos;') 
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    return txt;
}