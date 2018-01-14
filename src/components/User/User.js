import Component from '../../lib/Component.js'
import { escape } from '../../lib/utils.js'
import { getUserInfo, setUserInputstr } from './actions.js';


export default class User extends Component {
    
    constructor(refClip) {
        super(refClip);
    }

    stateToprops(state) {
        const {name, inputstr, session} = {...state.user} 
        return { name, inputstr, session };
    }

    onClickSession(ev) {
        console.log("onClickSession: ", ev);
    }

    onChangeInput(ev){
        const actpos = ev.target.selectionStart;
        const onInputIn = ev.target.className.indexOf('input-in') != -1;
        
        setUserInputstr(ev.target.value);
        
        if(onInputIn){
            const $input = this.$clip.querySelector('.User__input.input-in');
            $input.focus();
            $input.selectionStart = actpos;
        }
    }

    render() {
        return `
            <div class="User__name">
                <input class="User__input input-in" onkeyup="onChangeInput" value="${this.props.inputstr}"/>${this.props.name}:
            </div>
            ${this.props.session &&
                `<div class="User__session" onclick="onClickSession">${this.props.session}</div>`
            }
            <div class="User__inputstr">${escape(this.props.inputstr)}</div>
        `
    }
}

