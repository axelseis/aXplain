import { state, dispatch } from './store.js';
import { isDOMElement } from './utils.js'

export default class Component {
    constructor(refClip) {
        if(isDOMElement(refClip)){
            this.$clip = refClip;
            this.props = this.stateToprops(state);
            document.addEventListener('state', (ev) => this._updateProps())
        }
        else {
            throw new Error(`Component need to be initializated with a DOMElement, ${refClip} is not`)
        }
    }

    stateToprops(state) {
        return { ...state };
    }

    render() {
        return `Hello I'm ${this.constructor.name} and these are my props: ${this.props}`;
    }
    
    renderTemplate($domElement, tplObj){
        this.$clip.innerHTML = tplObj;
    }

    _updateProps() {
        const newProps = this.stateToprops(state) || {};
        
        if (JSON.stringify(this.props) !== newProps) {
            this.props = newProps;
            const tmpStr = this.render();
            if (tmpStr) {
                this.renderTemplate(this.$clip, tmpStr)
                this._setDomEvents(this.$clip);
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
                        throw new Error(`function ${attr.value} do not exists in ${this.constructor.name}`)
                    }
                }
            });
        });
    }
}