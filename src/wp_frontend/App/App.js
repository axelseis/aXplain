import Component from '../../lib/Component.js';
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';

import Portada from '../Portada/Portada.js';

import { getPosts, reducers as AppReducer } from './actions.js';
import { reducers as ObraReducer } from '../Obra/actions.js';
import { getWindowSize } from '../../utils.js';

const routes = [
    { url: "/" },
    { url: "/obra/:obraId" },
    { url: "404", redirect: "/" }
]

const videoAspect = 640/360;

export default class App extends Component {
    constructor(className) {
        super(className, [Portada]);
        
        initStore([AppReducer,ObraReducer], state);
        initRouter(routes, window.BASE_URL || '');

        window.addEventListener('resize', () => {
            this.onResizeWindow();
        })

        this.onResizeWindow();
        getPosts();
    }
    
    onResizeWindow(){
        const winSize = getWindowSize();
        this.setState({
            winW: winSize.width,
            winH: winSize.height
        })
    }

    stateToprops(state){
        const {winW,winH} = {...this.state}
        const winAspect = winW/winH;
        
        let videoW = winW;
        let videoH = 'auto';

        if(winAspect < videoAspect){
            videoH = winH;
            videoW = 'auto';
        }

        return ({
            videoW,
            videoH
        })
    }
    
    render() {
        const {videoW,videoH} = {...this.props};

        return(`
            <video 
                class="video--back"
                autoplay muted loop
                src="/assets/video/nanoback.mp4"
                width="${videoW}"
                height="${videoH}"
            ></video>
            <Portada class="Portada"></Portada>
        `)
    }
}

