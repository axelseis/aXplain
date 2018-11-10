import Component from '../../lib/Component.js';
import { initStore } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import Gallery from '../Gallery/Gallery.js';
import Visor from '../Visor/Visor.js';

import { reducers as GalleryReducer } from '../Gallery/actions.js';
import { reducers as VisorReducer } from '../Visor/actions.js';

import {initialState} from '../../initialState.js';

const routes = [
    { url: "/" },
    { url: "/images/:imageId" },
    { url: "404", redirect: "/" }
]

export default class App extends Component {
    constructor(className) {
        super(className, [Gallery,Visor]);

        initStore([GalleryReducer,VisorReducer], initialState);
        initRouter(routes, window.BASE_URL || '');
    }
    
    stateToprops(state){
        return ({ 
        })
    }
    
    render() {
        return(`
            <Gallery class="Gallery"></Gallery>
            <Visor class="Visor"></Visor>
        `)
    }
}

