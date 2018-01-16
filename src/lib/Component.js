import { state, dispatch } from './store.js';
import { _toArray, isDOMElement } from './utils.js'

export default class Component {
    constructor(refClip) {
        if(isDOMElement(refClip)){
            this.$clip = refClip;
            this.props = {};
            this._checkProps();
            document.addEventListener('state', (ev) => this._checkProps())
        }
        else {
            throw new Error(`Component need to be initializated with a DOMElement, ${refClip} is not`)
        }
    }

    stateToprops(state) {
        return { ...state };
    }

    render() {
        return false;
    }

    renderTemplate($domElement, templateStr) {
        if(!$domElement || !isDOMElement($domElement)){
            throw new Error(`renderTemplate needs a DOMElement and you passed [${$domElement}]`)
        }
        if(!$domElement.children.length){
            $domElement.innerHTML = templateStr;
        }
        else{
            const tempDom = document.createElement('div');
            tempDom.innerHTML = templateStr;

            this._checkDomData(tempDom, $domElement);
        }
        this._setDomEvents($domElement);
    }

    _checkProps() {
        const oldProps = JSON.stringify(this.props);
        this.props = this.stateToprops(state) || {};
        if (JSON.stringify(this.props) !== oldProps) {
            try{
                const tmpStr = this.render();
                if (tmpStr) {
                    this.renderTemplate(this.$clip, tmpStr)
                }
            }
            catch(err){
                console.log("err ", err);
                //throw err;
            }
        }
    }

    _checkDomData(newDom, oldDom) {
        const newDomChildren = _toArray(newDom.children);
        const oldDomChildren = _toArray(oldDom.children);

        newDomChildren.forEach((element, index) => {
            const oldElement = oldDomChildren[index];
            if (!oldElement) {
                oldDom.appendChild(element.cloneNode(true));
            }
            else if (element.nodeName !== oldElement.nodeName) {
                oldElement.outerHTML = element.outerHTML
            }
            else {
                if (element.value !== oldElement.value) {
                    oldElement.value = element.value;
                }
                if (element.children.length) {
                    this._checkDomData(element, oldElement)
                }
                if (element.innerHTML !== oldElement.innerHTML) {
                    oldElement.innerHTML = element.innerHTML;
                }
                _toArray(element.attributes).forEach(attr => {
                    const oldAttr = oldElement.getAttribute(attr.name);
                    if (!oldAttr || oldAttr !== attr.value) {
                        oldElement.setAttribute(attr.name, attr.value);
                    }
                })
            }
        })
        for (let iD = oldDomChildren.length-1; iD >= newDomChildren.length; iD--) {
            oldDom.removeChild(oldDomChildren[iD]);
        }
    }

    _setDomEvents($domElement) {
        const actNodes = _toArray($domElement.querySelectorAll('*'));

        actNodes.forEach(element => {
            _toArray(element.attributes).forEach(attr => {
                if (!attr.name.indexOf('on')) {
                    const tempFunc = this[attr.value];
                    if (tempFunc) {
                        element[attr.name] = tempFunc.bind(this)
                    }
                    else {
                        throw new Error(`function ${attr.value} do not exists in ${this.constructor.name}`)
                    }
                }
            });
        });
    }
}

