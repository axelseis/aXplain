import '../../../node_modules/regenerator-runtime/runtime.js';

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
        const {width:winW,height:winH} = {...getWindowSize()}
        const winAspect = winW/winH;
        
        let videoW = winW;
        let videoH = 'auto';

        if(winAspect < videoAspect){
            videoH = winH;
            videoW = 'auto';
        }

        this.setState({
            videoW,
            videoH
        })
    }

    stateToprops(state){
        return ({
            loaded: state.postsOrder && state.postsOrder.length
        })
    }
    
    onEndLoaderTransition(ev) {
        this.setState({
            endTransition: true
        })
    }

    onEndRender(){
        if(!this.state.inited){
            this.setState({
                inited: true
            })
        }
    }

    render() {
        const {videoW,videoH,inited,endTransition} = {...this.state};
        const {loaded} = {...this.props}
        const initedClass = inited ? 'App--inited' : '';

        return(`
            <Portada id="Portada" class="Portada" showing="${endTransition}"></Portada>
            ${!endTransition ? `
                <div id="loader" class="App__loader ${initedClass}" ontransitionend="onEndLoaderTransition">
                    <span>nano valdes</span>
                </div>
            ` : ''}
            ${loaded ? `
                <video 
                    class="App__back"
                    autoplay muted loop
                    src="/assets/video/nanoback.mp4"
                    width="${videoW}"
                    height="${videoH}"
                ></video>
            ` : ''}
        `)
    }
}

