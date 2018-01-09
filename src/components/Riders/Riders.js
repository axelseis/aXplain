import Component from '../../lib/Component.js'
import { state } from '../../lib/store.js'


export default class Riders extends Component {
    constructor(refClip) {
        super(refClip);
    }

    stateToprops() {
        const { inputstr, filter } = { ...state.user }
        this.props = {
            riders: { ...state.riders },
            inputstr, filter
        };
    }

    render() {
        const filterStr = (this.props.filter || '').toLowerCase();

        return `
            <div class="Riders">
            ${Object.keys(this.props.riders)
                .filter(key => {
                    const rider = this.props.riders[key];
                    const name = (`${rider.name} ${rider.surname}`).toLowerCase()
                    return name.indexOf(filterStr) != -1
                        || rider.surname.toLowerCase().indexOf(filterStr) != -1
                })
                .map((key) => {
                    const rider = this.props.riders[key];
                    return (
                        `<div class="Riders__rider">
                                ${rider.name} ${rider.surname} - ${this.props.inputstr}
                            </div>`
                    )
                })
                .join('')
            }
            </div>
        `
    }
}

