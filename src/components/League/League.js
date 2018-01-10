
import Component from '../../lib/Component.js'
import { go } from '../../lib/router.js'

import User from '../User/User.js';
import Info from '../Info/Info.js';
import Riders from '../Riders/Riders.js';

export default class League extends Component {
    
    constructor(refClip) {
        super(refClip);
        this.initComponents();
        this.actComponent = null;
    }
    
    initComponents(){
        this.menu = this.$clip.querySelector('.League__menu');
        this.info = new Info(this.$clip.querySelector('.League__Info'));
        this.user = new User(this.$clip.querySelector('.League__User'));
        this.riders = new Riders(this.$clip.querySelector('.League__Riders'));
        
        this.menu.onclick = this.selectMenuItem.bind(this);
    }

    selectMenuItem(ev){
        const link = ev.target.getAttribute('data-link');
        go(link || '/')
    }

    stateToprops(state) {       
        return { ...state.router }
    }

    render() {
        if(this.actComponent){
            this.actComponent.hide();
        }
        
        this.actComponent = this[this.props.component];
        this.actComponent.show();
    }
}

