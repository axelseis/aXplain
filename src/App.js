import Component from './lib/Component.js';
import { initStore } from './lib/store.js';

import OLApp from "./ordered_list/App/App.js";
import IGApp from "./images_gallery/App/App.js";
import WPApp from "./wp_frontend/App/App.js";

const demos = {
    images_gallery: IGApp,
    ordered_list: OLApp,
    wp_frontend: WPApp
}

export default class App extends Component {
    constructor(className) {
        super(className, [OLApp]);
        initStore([], {});

        this.setDemoSelected(Object.keys(demos)[2])
    }
    
    stateToprops(state){
        const { demoSelected, menuVisible=false } = {...this.state}
        return ({
            demoSelected,
            menuVisible
        })
    }
    
    setDemoSelected(demoId){
        const appClass = demos[demoId];
        const actComponent = this._components["App-demo"];

        if(actComponent){
            actComponent.dispose();
        }
        
        this._classes2Render = [appClass];
        
        this.setState({
            demoSelected: demoId
        })
    }

    onClickHeaderButton(ev){
        this.setDemoSelected(ev.target.id)
    }

    onClickOpenClose(){
        this.setState({
            menuVisible: !this.props.menuVisible
        })
    }

    render() {
        const {demoSelected, menuVisible} = {...this.props}
        return(`
            <div class="aXplain__menu menu--${menuVisible ? 'visible' : 'hidden'}">
                ${Object.keys(demos).map(demoId => {
                    const selected = demoId === demoSelected ? 'selected' : 'unselected';

                    return(`
                        <div id="${demoId}" class="aXplain__menu__button button--${selected}" onClick="onClickHeaderButton">
                            ${demoId.replace('_',' ')}
                        </div>
                    `)
                }).join('')}
                <div class="aXplain__menu__openclose" onClick="onClickOpenClose">
                    <i class="fas fa-angle-${menuVisible ? 'left' : 'right'}"></i>
                </div>
            </div>
            <App id="App-demo" class="App-demo"></App>
        `)
    }
}

