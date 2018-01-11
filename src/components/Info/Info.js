import Component from '../../lib/Component.js'

export default class Info extends Component {
    constructor(refClip) {
        super(refClip);
    }

    stateToprops(state) {
        return { ...state.Info };
    }

    render() {
        if(this.props.inited){
            //console.log("this.$clip ", this.$clip);
        }
    }
}

