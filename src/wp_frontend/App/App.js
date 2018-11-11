import Component from '../../lib/Component.js';
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import Portada from '../Portada/Portada.js';
import Visor from '../Visor/Visor.js';

import { reducers as PortadaReducer } from '../Portada/actions.js';
import { reducers as VisorReducer } from '../Visor/actions.js';

const routes = [
    { url: "/" },
    { url: "/images/:imageId" },
    { url: "404", redirect: "/" }
]

export default class App extends Component {
    constructor(className) {
        super(className, [Portada,Visor]);
        
        initStore([PortadaReducer,VisorReducer], state);
        initRouter(routes, window.BASE_URL || '');
    }
    
    stateToprops(state){
        return ({ 
        })
    }
    
    render() {
        return(`
            <Portada class="Portada"></Portada>
            <Visor class="Visor"></Visor>
        `)
    }
}

