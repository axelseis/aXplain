import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'
import { getRiders } from './actions.js'

export default class Riders extends ShowHide(Component) {

    constructor(className) {
        super(className);
        getRiders();
    }

    stateToprops(state) {
        return {
            bet: [...state.user.bets[state.season.actEvent]],
            riders: { ...state.riders },
            actEvent: {...state.events[state.season.actEvent]}
        };
    }

    render() {
        return (`
            <div class="Play__list">
                ${Object.keys(this.props.riders).map(riderId =>
                    riderRowTpl(this.props.riders[riderId])
                ).join('')}
            </div>
            <div class="Play__bet">
                ${this.props.bet.map(riderId => {
                    return betItemTpl(this.props.riders[riderId] || {})
                }).join('')}
        </div>
        `)
    }
}

const riderRowTpl = (rider) => (`
    <div class="Play__list-item">${rider.surname} ${rider.name}</div>
`)

const betItemTpl = (rider) => (`
    <div class="Play__bet-item">${rider.surname} ${rider.name}</div>
`)

