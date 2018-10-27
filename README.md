# aXplain: React+Redux in Vanilla JS

aXplain is experimental; please use carefully :)

# Store
The core of aXplain is the state container, a Redux-like store.

From Redux documentation:
> A _reducer_ (also called a _reducing function_) is a function that
> accepts an accumulation and a value and returns a new accumulation.
> They are used to reduce a collection of values down to a single value.

    import { initStore } from  './src/lib/store.js';
	import { reducers as ComponentReducer } from './src/components/Component/actions.js';
	import { reducers as SubComponentReducer } from './src/components/SubComponent/actions.js';
    
    const reducer_one = (state, payload) => { ...state, ...payload };
    const reducer_two = (state, payload) => { ...state, more: payload.more };
    const initialState = { initValue: 1 };
    
    initStore([ComponentReducer,SubComponentReducer], initialState);

# Router
aXplain contains a simple router that exposes its properties in the state. 
the router has two functions that can be used to manage navigation: go for internal navigation and goOut to manage external links
    
    import { initRouter, go, goOut } from  './src/lib/router.js';
    
    const routesArray = [
        { url:  "/" },
        { url:  "/section/:sectionId" },
        { url:  "404", redirect:  "/" }
    ]
    const BASE_URL = '';
    
    initRouter(routesArray,BASE_URL);
    
    go('/section/section_one');
    goOut('http://axflash.com');

# Components
In aXplain you can create reactive components like in React, but with Vanilla JS.

    import  Component  from  '../../lib/Component.js';
    import  SubComponent  from  '../SubComponent/SubComponent.js';
    
    export  default  class  Photo  extends  Component {
        constructor(element) {
            super(element, [SubComponent]);
        }
        stateToprops(state){
            return ({
                prop1: state.prop1
            })
        }
        render() {
            return(`
                <div>
                    <Subcomponent id="Sub" data="${this.props.prop1}" class="Subcomponent"></subcomponent>
                </div>
            ')
        }
    }


# How to start
First clone this repository :)
then use npm

 1. **npm install** // install all the dependencies
 2. **npm start** // start the development server
 3. **npm run build** // webpack build to dist/ folder
 4. **npm run prod** // start the server in production mode
