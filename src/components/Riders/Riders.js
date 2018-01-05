import Component from '../../lib/Component.js'
import { state } from '../../lib/store.js'


export default class Riders extends Component {
    constructor(refClip) {
        super(refClip);
    }

    stateToprops() {
        this.props = { 
            riders: {...state.riders} 
        };
    }

    render() {
        return `
            <div class="Riders">
                ${Object.keys(this.props.riders).map((key) => {
                    const rider = this.props.riders[key];
                    return (
                        `<div class="Riders__rider">
                            ${rider.name} ${rider.surname}
                        </div>`
                    )
                }).join('')}
            </div>
        `
    }
}

