import Component from '../../lib/Component.js'
import { state } from '../../lib/store.js'

import { getUserSession } from './actions.js';


export default class User extends Component {
    constructor(refClip){
        super(refClip);
    }

    stateToprops() {
        this.props = {...state.user};
    }

    onClickUsername(ev) {
        getUserSession()
    }

    onClickSession(ev) {
        console.log("onClickSession: ", ev);
    }

    render() {
        return (`
            <div class="User__name" onClick="onClickUsername">${this.props.name}:</div>
            ${this.props.session &&
                `<div class="User__session" onclick="onClickSession">${this.props.session}</div>`
            }
        `)
    }
}

