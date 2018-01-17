
import Component from '../../lib/Component.js'
import { ShowHide } from '../../lib/Mixins.js'
import { go } from '../../lib/router.js'

import User from '../User/User.js';
import Info from '../Info/Info.js';
import Riders from '../Riders/Riders.js';

export default class League extends ShowHide(Component) {

    constructor(className) {
        super(className);
        this.initComponents();
        this.actComponent = null;
    }

    initComponents(){
        this.menuItems = Array.from(this.$clip.querySelectorAll('.League__menu-item'));
        this.info = new Info('League__Info');
        this.user = new User('League__User');
        this.riders = new Riders('League__Riders');

        this.menuItems.forEach(item => {
            item.onclick = this.selectMenuItem.bind(this);
        });
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
        if(this.props.component){
            this.actComponent = this[this.props.component];
            this.actComponent.show();
        }
    }
}

