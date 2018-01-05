import Component from '../../lib/Component.js'
import { state, dispatchAction } from '../../lib/store.js'
import { escape } from '../../lib/utils.js'
import { getUserInfo, getRiders, actions } from './actions.js';


export default class User extends Component {
    constructor(refClip) {
        super(refClip);
        this.$inputOut = document.querySelector('.User__input.input-out')
        this.$inputOut.onkeyup = this.onChangeInput.bind(this);
    }

    stateToprops() {
        this.props = { ...state.user };
    }

    onClickUsername(ev) {
        getRiders()
    }

    onClickSession(ev) {
        console.log("onClickSession: ", ev);
    }

    onChangeInput(ev){
        const actpos = ev.target.selectionStart;
        const onInputIn = ev.target.className.indexOf('input-in') != -1;
        
        dispatchAction (
            actions.SET_USER_INPUTSTR,
            { inputstr: ev.target.value }
        )
        
        if(onInputIn){
            const $input = this.$clip.querySelector('.User__input.input-in');
            $input.focus();
            $input.selectionStart = actpos;
        }
    }

    render() {
        if(this.$inputOut.value !== this.props.inputstr){
            this.$inputOut.value = this.props.inputstr;
        }

        return `
            <div class="User__name" onclick="onClickUsername">
                <input class="User__input input-in" onkeyup="onChangeInput" value="${this.props.inputstr}"/>${this.props.name}:
            </div>
            ${this.props.session &&
                `<div class="User__session" onclick="onClickSession">${this.props.session}</div>`
            }
            <div class="User__inputstr">${escape(this.props.inputstr)}</div>
        `
    }
}

