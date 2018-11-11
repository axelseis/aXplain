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
        this._classes2Render = [IGApp]
        
        initStore([], {});
    }
    
    stateToprops(state){
        const {demoId = Object.keys(demos)[0]} = {...this.state}
        return ({
            demoId
        })
    }
    
    onClickHeaderButton(ev){
        const demoId = ev.target.id 
        const appClass = demos[demoId];

        this._components.App.dispose();
        this._classes2Render = [appClass];
        
        this.setState({
            demoId
        })
    }

    render() {
        return(`
            <div class="aXplain__menu">
                ${Object.keys(demos).map(demoId => {
                    const selected = demoId === this.props.demoId ? 'selected' : 'unselected';
                    console.log('this.props.demoId', this.props.demoId)

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

