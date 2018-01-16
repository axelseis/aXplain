import { state } from './store.js';
import { isDOMElement } from './utils.js'

export default class Component {
    constructor(refClip) {
        if (isDOMElement(refClip)) {
            this.$clip = refClip;
            this.props = this.stateToprops(state);
            document.addEventListener('state', (ev) => this._onChangeState())
        }
        else {
            throw new Error(`Component need to be initializated with a DOMElement, ${refClip} is not`)
        }
    }

    get _name(){
        return this.constructor.name;
    }

    stateToprops(state) {
        return { ...state[this._name] };
    }

    render() {
        return `Hello I'm ${this._name} and these are my props: ${this.props}`;
    }

    renderTemplate($domElement, templateStr) {
        if (!$domElement || !isDOMElement($domElement)) {
            throw new Error(`${this.name}: renderTemplate() needs a DOMElement and you passed [${$domElement}]`)
        }
        else {
            $domElement.innerHTML = templateStr;
            this._setDomEvents($domElement);
        }
    }

    _onChangeState() {
        const newProps = this.stateToprops(state) || {};

        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            this.props = newProps;
            const tmpStr = this.render();

            if (tmpStr) {
                this.renderTemplate(this.$clip, tmpStr)
            }
        }
    }

    _setDomEvents($domElement) {
        const actNodes = Array.from($domElement.querySelectorAll('*'));

        actNodes.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if (!attr.name.indexOf('on')) {
                    const tempFunc = this[attr.value];
                    if (tempFunc) {
                        element[attr.name] = tempFunc.bind(this)
                    }
                    else {
                        throw new Error(`function ${attr.value} do not exists in ${this._name}`)
                    }
                }
            });
        });
    }
}