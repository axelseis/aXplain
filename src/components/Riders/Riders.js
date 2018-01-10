import Component from '../../lib/Component.js'
import { setFilterValue, getRiders } from './actions.js'

export default class Riders extends Component {
    
    constructor(refClip) {
        super(refClip);
        this.initDomObjects();

        getRiders();
    }
    
    initDomObjects(){
        this.$list = this.$clip.querySelector('.Riders__list')
        this.$inputOut = this.$clip.querySelector('.Riders__filter')
        this.$inputOut.onkeyup = this.setFilter.bind(this);
    }

    setFilter(ev){
        setFilterValue(ev.target.value)
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
        const filteredList = Object.keys(this.props.riders).filter(key => {
            const rider = this.props.riders[key];
            const name = (`${rider.name} ${rider.surname}`).toLowerCase()
            return name.indexOf(filterStr) != -1
                || rider.surname.toLowerCase().indexOf(filterStr) != -1
        })
        
        this.renderTemplate(this.$list, `
            ${
                filteredList.map((key) => {
                    const rider = this.props.riders[key];
                    return `
                        <div class="Riders__rider">
                            ${rider.name} ${rider.surname} - ${this.props.inputstr}
                        </div>
                    `
                })
                .join('')
            }
        `)
    }
}

