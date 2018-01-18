import { state, dispatch, dispatchAction } from './store.js';
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

        dispatchAction(actions.INIT_COMPONENT,{
            componentName: this._name
        })
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
        return { ...state.Components[this.name] };
    }

    render() {
        return `Hello I'm ${this.name} and these are my props: ${this.props}`;
    }

    renderTemplate($domElement, templateStr) {
        if(!$domElement || !isDOMElement($domElement)){
            throw new Error(`${this.type}: renderTemplate needs a DOMElement and you passed [${$domElement}]`)
        }
        if(!templateStr || !isString(templateStr)){
            throw new Error(`${this.type}: renderTemplate needs a string and you passed [${$domElement}]`)
        }
        $domElement.innerHTML = templateStr;
        this._setDomEvents($domElement);
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
                        throw new Error(`function ${attr.value} do not exists in ${this.name}`)
                    }
                }
            });
        });
    }

    dispose(){
        dispatchAction(actions.REMOVE_COMPONENT,{
            componentName:this.name
        })
        document.removeEventListener('state',this._stateListener);
        for (let prop in this) {
            this[prop] = null;
            delete this[prop]
        }
    }
}
