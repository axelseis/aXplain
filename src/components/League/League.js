
import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'
import { go } from '../../lib/router.js'

import Info from '../Info/Info.js';
import Play from '../Play/Play.js';
import Results from '../Results/Results.js';

export default class League extends Component {

    constructor(className) {
        super(className);
        this.initComponents();
        this.actComponent = null;
    }

    initComponents(){
        this.menuItems = Array.from(this.$clip.querySelectorAll('.League__menu-item'));
        this.info = new Info('League__Info');
        this.play = new Play('League__Play');
        this.results = new Results('League__Results');

        this.menuItems.forEach(item => {
            item.onclick = this.selectMenuItem.bind(this);
        });
    }

    selectMenuItem(ev){
        const link = ev.target.getAttribute('data-link');
        go(link || '/')
    }

    stateToprops(state) {
        return { router: {...state.router} }
    }

    render() {
        this.menuItems.forEach(item => {
            const link = item.getAttribute('data-link');
            if(this.props.router.route === link){
                item.classList.add('selected')
            }
            else {
                item.classList.remove('selected')
            }
        });

        if(this.actComponent){
            this.actComponent.hide();
        }
        if(this.props.router.component){
            this.actComponent = this[this.props.router.component];
            this.actComponent.show();
        }
    }
}

