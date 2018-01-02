import {state, dispatch} from './store.js';


export default class Component {
    constructor(refClip){
        this.$clip = refClip;
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
            const renderStr = this.render();
            if(renderStr){
                this.$clip.innerHTML = renderStr;
                this.$clip.querySelectorAll('[onClick]').forEach(element => {
                    const clickFunc = element.getAttribute("onclick")
                    element.setAttribute('onclick','')
                    element.onclick = this[clickFunc].bind(this);
                });
            }
        }
    }
}

