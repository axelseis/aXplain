import {store as state, dispatch} from '../../Store/store.js';
import {getUserSession} from '../../Store/actions.js';


export default class User {
    constructor(refClip){
        this.$clip = refClip;
        document.addEventListener('state', (ev) => this._checkProps())
        this.props = {}
    }

    stateToprops() {
        this.props = {...state.user};
    }

    onClickUsername(ev){
        getUserSession()
    }

    onClickSession(ev){
        console.log("onClickSession: ", ev);
    }

    render() {

        return (`
            <div class="User__name" onClick="onClickUsername">${this.props.name}:</div>
            ${this.props.session ?
                `<div class="User__session" onclick="onClickSession">${this.props.session}</div>`
                : ''
            }
        `)
    }

    _checkProps() {
        const oldProps = JSON.stringify(this.props);
        this.stateToprops();
        if(JSON.stringify(this.props) !== oldProps){
            this.$clip.innerHTML = this.render();
            this.$clip.querySelectorAll('[onClick]').forEach(element => {
                const clickFunc = element.getAttribute("onclick")
                element.setAttribute('onclick','')
                element.onclick = this[clickFunc].bind(this);
            });
        }
    }
}

