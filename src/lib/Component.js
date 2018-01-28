import { state } from './store.js';
import { isDOMElement, isString } from './utils.js'
import { actions } from './actions.js';

export default class Component {

    constructor(className) {
        const DOMElement = document.querySelectorAll(`.${className}`);

        if(DOMElement.length > 1) {
            throw new Error(`${this.type}:
            A Component needs a unique DOM Element to initialize,
            there are ${DOMElement.length} '${className}' at DOM`)
        }

        if(!DOMElement.length) {
            throw new Error(`${this.type}:
                Component needs to be initializated with a single DOMElement,
                there are not any '${className}' at DOM`)
        }

        this.$clip = DOMElement[0];
        this._name = className;

        this.props = this.stateToprops(state);

        this._stateListener = this._onChangeState.bind(this);
        document.addEventListener('state', this._stateListener)
    }

    get name(){
        return this._name;
    }

    get type(){
        return this.constructor.name
    }

    stateToprops(state) {
        const componentState = (state.Components||[])[this.name]
        return { ...componentState };
    }

    render() {
        return `Hello I'm ${this.name} and these are my props: ${this.props}`;
    }

    renderTemplate($domElement, templateTpl) {
        const templateStr = templateTpl;

        if(!$domElement || !isDOMElement($domElement)){
            throw new TypeError(`${this.type}: renderTemplate requires a DOMElement and you passed [${$domElement}]`)
        }
        if(!templateStr || !isString(templateStr)){
            throw new TypeError(`${this.type}: renderTemplate requires a string and you passed [${$domElement}]`)
        }
        if(!$domElement.children.length){
            $domElement.innerHTML = templateStr;
        }
        else{
            const $tempDom = document.createElement('div');
            $tempDom.innerHTML = templateStr;

            if($domElement.innerHTML === $tempDom.innerHTML){
                console.warn(
                    `${this.type}: the updated DOM provided to renderTemplate is equal than
                    actual DOM, maybe your stateToProps function is not well optimized`
                )
            }
            else if(!$tempDom.children.length){
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
        }
    }

    _updateDomElement(oldDom,newDom) {
        const newDomChildren = Array.from(newDom.childNodes);
        const oldDomChildren = Array.from(oldDom.childNodes);
        const isTextNode = (node) => node.nodeType === Node.TEXT_NODE;

        for (let iD = oldDomChildren.length-1; iD >= newDomChildren.length; iD--) {
            oldDom.removeChild(oldDomChildren[iD]);
        }

        newDomChildren.forEach((element, index) => {
            
            const oldElement = oldDomChildren[index];
            
            if (!oldElement) {
                oldDom.appendChild(element.cloneNode(true));
            }
            else if (
                isTextNode(element) && isTextNode(oldElement)
                && oldElement.nodeValue !== element.nodeValue
            ) {
                oldElement.nodeValue = element.nodeValue
            }
            else if(isTextNode(oldElement)){
                oldDom.replaceChild(element.cloneNode(true),oldElement);
            }
            else if (element.nodeName !== oldElement.nodeName) {
                oldElement.outerHTML = element.outerHTML || ''
            }
            else {
                Array.from(element.attributes || []).forEach(attr => {
                    const oldAttr = oldElement.getAttribute(attr.name);
                    if (!oldAttr || oldAttr !== attr.value) {
                        oldElement.setAttribute(attr.name, attr.value);
                    }
                })
                Array.from(oldElement.attributes || []).forEach(attr => {
                    if (!element.attributes[attr.name]) {
                        oldElement.removeAttribute(attr.name);
                    }
                })
                if (element.value !== oldElement.value) {
                    oldElement.value = element.value;
                }
                if (element.childNodes.length) {
                    this._updateDomElement(oldElement,element)
                }
                if (element.innerHTML.replace(/\s+/g, '') !== oldElement.innerHTML.replace(/\s+/g, '')) {
                    console.warn(`
                        Need to force innerHTML substitution :(,\n
                            OLDER: ${oldElement.innerHTML.replace(/\s+/g, '')} \n
                            NEW: ${element.innerHTML.replace(/\s+/g, '')}
                        `);
                    oldElement.innerHTML = element.innerHTML;
                }
            }
        })
    }

    _onChangeState() {
        const newProps = this.stateToprops(state) || {};

        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            this.props = newProps;
            this.forceRender();
        }
    }
    
    _setDomEvents($domElement) {
        const actNodes = Array.from($domElement.querySelectorAll('*'));

        actNodes.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if (attr.name.indexOf('on') === 0) {
                    const tempFunc = this[attr.value];
                    //element.removeAttribute(attr.name);
                    if (tempFunc) {
                        element[attr.name] = tempFunc.bind(this)
                    }
                    else {
                        throw new Error(`function ${attr.value} do not exists in ${this.name}`)
                    }
                }
            });
        });
    }

    dispose(){
        document.removeEventListener('state',this._stateListener);
        for (let prop in this) {
            this[prop] = null;
            delete this[prop]
        }
    }
}
