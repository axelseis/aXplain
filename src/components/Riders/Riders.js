import Component from '../../lib/Component.js'

export default class Riders extends Component {
    constructor(refClip) {
        super(refClip);
    }

    stateToprops(state) {
        const { inputstr, filter } = { ...state.user }
        return {
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
                    return `
                        <div class="Riders__rider">
                            ${rider.name} ${rider.surname} - ${this.props.inputstr}
                        </div>
                    `
                })
                .join('')
            }
            </div>
        `
    }
}

