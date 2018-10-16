const isAxelServer = true;

export function getAPIServer() {
    const hostname = window.location.hostname;
    const lang = window.lang || 'en';
    let secureServer = window.secure_url || 'https://www.motogp.com'

    if(hostname === 'localhost'){
        if(isAxelServer){
            secureServer = 'http://axelclaverwww.motogp.com:8080';
        }else{
            secureServer = 'http://localwww.motogp.com';
        }
    }
    else if(hostname.indexOf('integration') === 0){
        const subdomain =  hostname.split('.motogp.com')[0];
        secureServer = secureServer || `https://secure${subdomain}.motogp.com`;
    }
    else if(hostname.indexOf('www.motogp.com') > 0){
        const port = location.port;
        let subdomain =  hostname.split('www.motogp.com')[0];
        let subdomaingame = subdomain;
        
        if(subdomain === 'local'){
            subdomaingame += 'www.';
        }
        
        secureServer = `http://${subdomain}www.motogp.com:${port}`;
    }
    return `${secureServer}/${lang}/videopass-help/api`;
}

export function getAssetsFolder(){
    return window.ASSETS_FOLDER || './';
}

export function getMousePosition(ev) {
    let evData = ev || window.event || {};

    const propsHandler = evData.touches ? evData.touches[0] : evData;

    var pageX = propsHandler.pageX;
    var pageY = propsHandler.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = evData.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = evData.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
        left: pageX,
        top: pageY
    };
}

export function getWindowSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}

export function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
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

export function isChrome() {
    return !!window.chrome && !!window.chrome.webstore;
}

export function areClipPathShapesSupported () {
    const base = 'clipPath',
        prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
        properties = [ base ],
        testElement = document.createElement( 'testelement' ),
        attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    // Push the prefixed properties into the array of properties.
    for ( let i = 0, l = prefixes.length; i < l; i++ ) {
        const prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
        properties.push( prefixedProperty );
    }

    // Interate over the properties and see if they pass two tests.
    for ( let i = 0, l = properties.length; i < l; i++ ) {
        const property = properties[i];

        // First, they need to even support clip-path (IE <= 11 does not)...
        if ( testElement.style[property] === '' ) {

            // Second, we need to see what happens when we try to create a CSS shape...
            testElement.style[property] = attribute;
            if ( testElement.style[property] !== '' ) {
                return true;
            }
        }
    }

    return false;
};

export function getDevicePixelRatio() {
    return parseInt(window.devicePixelRatio || 1);
}