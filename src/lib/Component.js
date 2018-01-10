import { state, dispatch } from './store.js';


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
        const tempDom = document.createElement('div');
        tempDom.innerHTML = templateStr;

        this._checkDomData(tempDom, $domElement);
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
        let lastIndex;
        [...newDom.children].forEach((element, index) => {
            lastIndex = index;
            const oldElement = oldDom.children[index];

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
                [...element.attributes].forEach(attr => {
                    const oldAttr = oldElement.getAttribute(attr.name);
                    if (!oldAttr || oldAttr !== attr.value) {
                        oldElement.setAttribute(attr.name, attr.value);
                    }
                })
            }
        })
        for (let iD = oldDom.children.length-1; iD >= newDom.children.length; iD--) {
            oldDom.removeChild(oldDom.children[iD]);
        }
    }

    _setDomEvents($domElement) {
        const actNodes = $domElement.querySelectorAll('*');

        actNodes.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
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

