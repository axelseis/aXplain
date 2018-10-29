import { state } from './store.js';
import { isDOMElement, isString, cleanChildNodes, getAllAttributes, aXplainWarn, mapEvent } from './utils.js'

const uniqueNames = [];
function getUniqueName(name){
    const origName = name;
    let index = 0;
    while (uniqueNames.indexOf(name) != -1){
        name = origName + index++
    }
    uniqueNames.push(name);
    return name;
}

const isTextNode = (node) => node.nodeType === Node.TEXT_NODE;

export default class Component {

    constructor(initiator, classes2Render) {
        const className = isDOMElement(initiator) ? this.constructor.name : initiator || this.constructor.name;
        const DOMElement = isDOMElement(initiator) ? [initiator] : document.querySelectorAll(`.${className}`);

        if (DOMElement.length > 1) {
            throw new Error(`${this.type}:
            A Component needs a unique DOM Element to initialize,
            there are ${DOMElement.length} '${className}' at DOM`)
        }

        if (!DOMElement.length) {
            throw new Error(`${this.type}:
                Component needs to be initializated with a single DOMElement,
                there are not any '${className}' at DOM`)
        }

        this.$clip = DOMElement[0];
        this._name = getUniqueName(className);
        this._classes2Render = classes2Render || [];
        this.props = {};
        this.domProps = {};

        this._components = {};

        this._stateListener = this._onChangeState.bind(this);
        document.addEventListener('state', this._stateListener);

        this._stateListener();
    }
    
    get name() {
        return this._name;
    }

    get type() {
        return this.constructor.name
    }

    getAppProp(propName){
        return (state.App || {})[propName];
    }

    stateToprops(state) {
        const componentState = (state.Components || [])[this.name]
        return { ...componentState };
    }

    render() {
        return `Hello I'm ${this.name} and these are my props: ${this.props}`;
    }

    renderTemplate($domElement, templateTpl) {
        const templateStr = templateTpl
        .replace(/(?:\r\n|\r|\n)/g, '')
        .replace(/(onload|onLoad|onerror|onError)=/g, "$1_event=")
        //.replace(/()=/g, 'onerror_event=');
        
        if (!$domElement || !isDOMElement($domElement)) {
            throw new TypeError(`${this.type}: renderTemplate requires a DOMElement and you passed [${$domElement}]`)
        }
        if (!templateStr || !isString(templateStr)) {
            throw new TypeError(`${this.type}: renderTemplate requires a string and you passed [${$domElement}]`)
        }
        if (!$domElement.children.length) {
            $domElement.innerHTML = templateStr;
        }
        else {
            const $tempDom = document.createElement('div');
            $tempDom.innerHTML = templateStr;

            if ($domElement.innerHTML === $tempDom.innerHTML) {
                aXplainWarn(
                    `${this.type}: the updated DOM provided to renderTemplate is equal than
                    actual DOM, maybe our stateToProps function is not well optimized`
                )
            }
            else if (!$tempDom.children.length) {
                $domElement.innerHTML = $tempDom.innerHTML
            }
            else {
                this._updateDomElement($domElement, $tempDom);
            }
        }

        this._setDomEvents($domElement);
    }

    forceRender() {
        const tmpStr = this.render();

        if (tmpStr) {
            this.renderTemplate(this.$clip, tmpStr)
            if(this._classes2Render && this._classes2Render.length){
                requestAnimationFrame(() => {
                    this._initSubcomponents();
                })
            }
            if(!!this.onEndRender){
                requestAnimationFrame(() => {
                    this.onEndRender();
                })
            }
        }
    }

    _initSubcomponents(){
        this._components = this._components || [];

        this._classes2Render.map(classFunc => {
            const className = classFunc.prototype.constructor.name;
            const elements = this.$clip.querySelectorAll(className.toLowerCase());
            
            Object.keys(elements).forEach((id,index) => {
                const tempName = elements[id].getAttribute('id') || className + index;
                if(!this._components[tempName] || this._components[tempName].$clip !== elements[id]){
                    elements[id].setAttribute('id', tempName);
                    elements[id].__axplainComp__ = classFunc;
                    this._components[tempName] = new classFunc(elements[id]);
                }
                else {
                    this._components[tempName]._onChangeState()
                }
            });
        })
    }

    _isSubcomponent(element){
        return this._classes2Render.find(classFunc => classFunc.prototype.constructor.name.toLowerCase() === element.nodeName.toLowerCase())
    }

    _updateDomElement(oldDom, newDom) {
        cleanChildNodes(oldDom)
        cleanChildNodes(newDom)

        if(oldDom && !isTextNode(oldDom) && this._isSubcomponent(oldDom)){
            newDom.innerHTML = oldDom.innerHTML;
        }
        else {
            const newDomChildren = Array.from(newDom.childNodes);
            const oldDomChildren = Array.from(oldDom.childNodes);
    
            for (let iD = oldDomChildren.length - 1; iD >= newDomChildren.length; iD--) {
                oldDom.removeChild(oldDomChildren[iD]);
            }
    
            newDomChildren.forEach((element, index) => {
                let oldElement = oldDomChildren[index];
                
                if (!oldElement) {
                    oldElement = element.cloneNode(true);
                    oldDom.appendChild(oldElement);
                }
                else if (
                    isTextNode(element) && isTextNode(oldElement)
                    && oldElement.nodeValue !== element.nodeValue
                ) {
                    oldElement.nodeValue = element.nodeValue
                }
                else if (isTextNode(oldElement) && !isTextNode(element)) {
                    oldDom.replaceChild(element.cloneNode(true), oldElement);
                }
                else if (element.nodeName !== oldElement.nodeName) {
                    oldElement.outerHTML = element.outerHTML || ''
                }
                else if (element.outerHTML !== oldElement.outerHTML) {
                    Array.from(element.attributes || []).forEach(attr => {
                        const oldAttr = oldElement.getAttribute(attr.name);
                        if (!oldAttr || oldAttr !== attr.value) {
                            oldElement.setAttribute(attr.name, attr.value);
                        }
                    })
                    if (oldElement.attributes.length > element.attributes.length) {
                        Array.from(oldElement.attributes || []).forEach(attr => {
                            if (!element.attributes[attr.name]) {
                                oldElement.removeAttribute(attr.name);
                            }
                        })
                    }
                    if (element.value !== oldElement.value) {
                        oldElement.value = element.value;
                    }
                    if (element.childNodes.length || oldElement.childNodes.length) {
                        this._updateDomElement(oldElement, element)
                    }
                }
            })
        }

        //Security check
        if (newDom.innerHTML.replace(/\s+/g, '') !== oldDom.innerHTML.replace(/\s+/g, '')) {
            aXplainWarn(`
                    Force innerHTML substitution :(
                        OLD: ${oldDom.innerHTML.replace(/\s+/g, '')}
                        NEW: ${newDom.innerHTML.replace(/\s+/g, '')}
                    `);
            oldDom.innerHTML = newDom.innerHTML;
        }
    }
    
    _onChangeState() {
        let force = false;
        
        const newDomProps = JSON.stringify(getAllAttributes(this.$clip));
        if(newDomProps && JSON.stringify(this.domProps) !== newDomProps) {
            this.domProps = JSON.parse(newDomProps);
            force = true;
        }
        
        const newProps = JSON.stringify(this.stateToprops(state)) || null;
        if (newProps && JSON.stringify(this.props) !== newProps) {
            this.props = JSON.parse(newProps);
            force = true;
        }
        
        if(force) this.forceRender();
    }

    _setDomEvents($domElement) {
        const actNodes = Array.from($domElement.children);

        actNodes.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if(attr.name === 'id'){
                    this[`$${attr.value}`] = element
                }
                else if (attr.value != '' && attr.name.indexOf('on') === 0) {
                    const tempFunc = this[attr.value];
                    if (tempFunc) {
                        if(attr.name.indexOf('_event') !== -1){
                            //element.removeAttribute(attr.name)
                        }
                        const validEvent = 'on' + mapEvent(attr.name.replace('_event','').slice(2));
                        element[validEvent] = tempFunc.bind(this)
                    }
                    else {
                        throw new Error(`function ${attr.value} do not exists in ${this.name}`)
                    }
                }
            });
            if(!element.__axplainComp__ && element.children){
                this._setDomEvents(element);
            }
        });
    }

    dispose(){
        document.removeEventListener('state', this._stateListener);
        for (let prop in this) {
            this[prop] = null;
            delete this[prop]
        }
    }
}

