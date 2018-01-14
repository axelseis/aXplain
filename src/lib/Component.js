import { state, dispatch } from './store.js';
import { _toArray } from './utils'

export default class Component {
    constructor(refClip) {
        this.$clip = refClip;
        this.props = {};

        document.addEventListener('state', (ev) => this._checkProps())
        //this.$clip.addEventListener('transitionend', (ev) => this._endAnimation())
    }

    stateToprops(state) {
        this.props = { ...state };
    }

    render() {
        return false;
    }

    show() {
        this.$clip.classList.remove('hidden');
        this.$clip.classList.add('showing');
    }

    hide() {
        this.$clip.classList.remove('showing');
        this.$clip.classList.add('hidden');
    }

    renderTemplate($domElement, templateStr) {
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
            const tmpStr = this.render();
            if (tmpStr) {
                this.renderTemplate(this.$clip, tmpStr)
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

