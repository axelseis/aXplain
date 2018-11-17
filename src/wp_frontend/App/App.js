import '../../../node_modules/regenerator-runtime/runtime.js';

import Component from '../../lib/Component.js';
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import {initialState} from '../initialState.js'

import Portada from '../Portada/Portada.js';

import { getPosts, reducers as AppReducer } from './actions.js';
import { reducers as ObraReducer } from '../Obra/actions.js';
import { getWindowSize } from '../../utils.js';

const routes = [
    { url: "/" },
    { url: "/obra/:obraId" },
    { url: "/exhibitions" },
    { url: "404", redirect: "/" }
]

export default class App extends Component {
    constructor(className) {
        super(className, [Portada]);
        
        initStore([AppReducer,ObraReducer], {...state,...initialState});
        initRouter(routes, window.BASE_URL || '');

        getPosts();
    }
    
    stateToprops(state){
        return ({})
    }
    
    onEndLoaderTransition(ev) {
        console.log('ev', ev)
        this.setState({
            endTransition: true
        })
    }

    onEndRender(){
        if(!this.state.rendered){
            this.setState({
                rendered: true
            })
        }
    }

    render() {
        const {rendered,endTransition} = {...this.state};
        const loaderClass = rendered ? 'App--inited' : '';

        return(`
            <Portada id="Portada" class="Portada" showing="${endTransition}"></Portada>
            ${!endTransition ? `
                <div id="loader" class="App__loader ${loaderClass}" onanimationend="onEndLoaderTransition">
                    <span>nano valdes</span>
                </div>
            ` : ''}
        `)
    }
}

