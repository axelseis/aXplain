import { state, dispatch } from './store.js';
import { isDOMElement } from './utils.js'
import Component from "./Component.js"

export default class StringTplComponent  extends Component{
    render() {
        return `${this.constructor.name} :( This is because I'm a StringTplComponent with no render()`;
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

    _checkDomData(newDom, oldDom) {
        const newDomChildren = Array.from(newDom.children);
        const oldDomChildren = Array.from(oldDom.children);

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
                Array.from(element.attributes).forEach(attr => {
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
}

