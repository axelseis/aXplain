import {state, dispatch} from './store.js';


export default class Component {
    constructor(refClip){
        this.$clip = refClip;
        refClip.innerHTML = '';
        document.addEventListener('state', (ev) => this._checkProps())
        this.props = {}
    }

    stateToprops() {
        this.props = {...state};
    }

    render() {
        return false;
    }

    _checkProps() {
        const oldProps = JSON.stringify(this.props);
        this.stateToprops();
        if(JSON.stringify(this.props) !== oldProps){
            const tmpStr = this.render();
            if(tmpStr){
                this.renderTemplate(this.$clip, tmpStr)
            }
        }
    }
    _checkDomData(newDom,oldDom){
        [...newDom.children].forEach((element, index) => {
            const oldElement = oldDom.children[index];
            if(!oldElement){
                oldDom.appendChild(element.cloneNode(true));
            }
            else {
                if(element.value !== oldElement.value){
                    oldElement.value = element.value;
                }
                if(element.children.length){
                    this._checkDomData(element,oldElement)
                }
                if(element.innerHTML !== oldElement.innerHTML){
                    oldElement.innerHTML = element.innerHTML;
                }
                [...element.attributes].forEach(attr => {
                    const oldAttr = oldElement.getAttribute(attr.name);
                    if(!oldAttr || oldAttr !== attr.value){
                        if(!attr.name.indexOf('on')){
                            const tempFunc = this[attr.value];
                            if(tempFunc){
                                element[attr.name] = tempFunc.bind(this)                    
                            }
                            else {
                                throw new Error(`function ${attr.value} do not exists in ${this}`)
                            }
                        }
                        else {
                            oldElement.setAttribute(attr.name, attr.value);
                        }
                    }
                })
            }
        })
    }
    renderTemplate($domElement, templateStr){
        const tempDom = document.createElement('div');
        tempDom.innerHTML = templateStr;
        
        
        this._checkDomData(tempDom,$domElement);
        
        const actNodes = $domElement.querySelectorAll('*');
        //$domElement.innerHTML = templateStr;

        actNodes.forEach(element => {
            Array.from(element.attributes).forEach(attr => {
                if(!attr.name.indexOf('on')){
                    const tempFunc = this[attr.value];
                    if(tempFunc){
                        element[attr.name] = tempFunc.bind(this)                    
                    }
                    else {
                        throw new Error(`function ${attr.value} do not exists in ${this}`)
                    }
                }
            });
        });        
    }
}

