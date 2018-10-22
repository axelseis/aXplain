# aXplain: A React+Redux like library in plain ES6

aXplain is an experimental library that allows to create last generation reactive interfaces
aXplain has the faster development environment at chrome, there are plain ES6 modules !!!

# Components
In aXplain you can create components like in React, but with no external dependencies, only using plain ES6.
A simple component must to have this structure:

    import  Component  from  '../../lib/Component.js';
    
    export  default  class  Photo  extends  Component {
		constructor(element, [classes2Render]) {
		    super(element, [classes2Render]);
	    }
	    stateToprops(state){
		    return ({})
		}
		render() {
			return(`<div>content</div>')
		}
	}

# Store
aXplain contains an state container (Redux-like) that is deeply integrated with all the modules of the library.
You need to initializate the store before create the first component, passing a reducers Array and an object that will represents the initial state.

From redux documentation:
> A _reducer_ (also called a _reducing function_) is a function that
> accepts an accumulation and a value and returns a new accumulation.
> They are used to reduce a collection of values down to a single value.


    import { initStore } from  './src/lib/store.js';
    
    const reducer_one = (state, payload) => { ...state, ...payload};
    const reducer_two = (state, payload) => { ...state, ...payload};
    const initialState = {};
    
    initStore([reducer_one,reducer_two], initialState);

# Router
aXplain contains a simple router that is completelly integrated with the store.
The Router need to be initializated before create the first Component
The parameters of the actual route and the array of routes are stored at the state (state.App.router) and are accesibles by the components. 
the router has two functions that can be used to manage navigation: go for internal navigation and goOut for manage external links
	
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


# How to start
aXplain have an example project that you can use like a starter kit

 1. Open your system console
 2. type **git clone https://github.com/axelseis/aXplain.git** to clone this repository in your drive
 3. type **npm start**  to start the development server
 4. edit what you want: components are at src folder, index.js and index.html are the starter files
 5. when you are ok with the result the comand **npm run build** creates an minified and transpiled (babel) version of the application at dist/ folder
 6. **npm run prod** 