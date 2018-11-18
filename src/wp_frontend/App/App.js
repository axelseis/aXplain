import '../../../node_modules/regenerator-runtime/runtime.js';

import Component from '../../lib/Component.js';
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import {initialState} from '../initialState.js'
import Portada from '../Portada/Portada.js';

import { getPosts, getExhibitionsPage, reducers as AppReducer } from './actions.js';
import { reducers as ObraReducer } from '../Obra/actions.js';

export const positions = {
    init: 'INIT',
    obra: 'OBRA',
    gallery: 'GALLERY',
    exhibitions: 'EXHIBITIONS'
}


const routes = [
    { url: "/", position:positions.obra},
    { url: "/obra/:obraId", position:positions.gallery},
    { url: "/exhibitions", position:positions.exhibitions},
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
        const {App:{loadingExhibitions} = {}, router:{props:{position}={}}={}} = {...state}
        const {posts,exhibitions} = {...state}

        if(position === positions.exhibitions && !exhibitions && !loadingExhibitions){
            getExhibitionsPage();
        }
        
        return ({
            hasPosts: !!posts,
            position: !!posts && position || positions.init
        })
    }
    
    onEndLoaderTransition(ev) {
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
        const {hasPosts,position} = {...this.props};

        const loaderClass = rendered ? 'App--inited' : '';

        return(`
            <Portada id="Portada" class="Portada Portada--${position}" showing="${hasPosts}"></Portada>
            ${!hasPosts ? `
                <div id="loader" class="App__loader ${loaderClass}" onanimationiteration="onEndLoaderTransition">
                    <span>nano valdes</span>
                </div>
            ` : ''}
        `)
    }
}

