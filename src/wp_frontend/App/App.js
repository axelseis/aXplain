import Component from '../../lib/Component.js';
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import Portada from '../Portada/Portada.js';

import { getPosts, reducers as AppReducer } from './actions.js';

const routes = [
    { url: "/" },
    { url: "/obra/:obraId" },
    { url: "404", redirect: "/" }
]

export default class App extends Component {
    constructor(className) {
        super(className, [Portada]);
        
        initStore([AppReducer], state);
        initRouter(routes, window.BASE_URL || '');

        getPosts();
    }
    
    stateToprops(state){
        return ({ 
        })
    }
    
    render() {
        return(`
            <Portada class="Portada"></Portada>
        `)
    }
}

