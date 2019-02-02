import { html } from './lib/lit-html/lit-html.js';

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
        super(className, [WPApp]);
        initStore([], {});

        this.setDemoSelected('ordered_list')
    }
    
    stateToprops(state){
        return ({})
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

    onClickHeaderButton(demoId){
        this.setDemoSelected(demoId)
    }

    onClickOpenClose(){
        this.setState({
            menuVisible: !this.state.menuVisible
        })
    }

    render() {
        const {demoSelected, menuVisible} = {...this.state}
        return(html`
            <div class="aXplain__menu menu--${menuVisible ? 'visible' : 'hidden'}">
                ${Object.keys(demos).map(demoId => {
                    const selected = demoId === demoSelected ? 'selected' : 'unselected';

                    return(html`
                        <div id="${demoId}" class="aXplain__menu__button button--${selected}" @click="${(ev)=>this.onClickHeaderButton(demoId)}">
                            ${demoId.replace('_',' ')}
                        </div>
                    `)
                })}
                <div class="aXplain__menu__openclose" @click="${()=>this.onClickOpenClose()}">
                    <i class="fas fa-angle-${menuVisible ? 'left' : 'right'}"></i>
                </div>
            </div>
            <App id="App-demo" class="App-demo"></App>
        `)
    }
}

