import Component from './lib/Component.js';
import { initStore } from './lib/store.js';

import OLApp from "./ordered_list/App/App.js";
import IGApp from "./images_gallery/App/App.js";

const demos = {
    images_gallery: IGApp,
    ordered_list: OLApp
}

export default class App extends Component {
    constructor(className) {
        super(className, [OLApp]);
        initStore([], {});

        this.setDemoId(Object.keys(demos)[1])
    }
    
    stateToprops(state){
        const {demoId} = {...this.state}
        return ({
            demoId
        })
    }
    
    setDemoId(demoId){
        const appClass = demos[demoId];
        const actComponent = this._components.App;
        if(actComponent){
            actComponent.dispose();
        }
        this._classes2Render = [appClass];
        
        this.setState({
            demoId
        })
    }

    onClickHeaderButton(ev){
        this.setDemoId(ev.target.id)
    }

    render() {
        return(`
            <div class="aXplain__menu">
                ${Object.keys(demos).map(demoId => {
                    const selected = demoId === this.props.demoId ? 'selected' : 'unselected';

                    return(`
                        <div id="${demoId}" class="aXplain__menu__button button--${selected}" onClick="onClickHeaderButton">
                            ${demoId.replace('_',' ')}
                        </div>
                    `)
                }).join('')}
            </div>
            <App id="App" class="App"></App>
        `)
    }
}

