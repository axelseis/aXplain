# aXplain: React+Redux in Vanilla JS

aXplain is experimental, please use carefully :)

# Store
aXplain contains an state container (Redux-like) that is deeply integrated with all the modules of the library.
You need to initializate the store before create the first component.

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
aXplain contains a simple router that need to be initializated before create the first Component. 
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

# Components
In aXplain you can create components like in React, but with no external dependencies, only using plain ES6.

    import  Component  from  '../../lib/Component.js';
    import  SubComponent  from  '../SubComponent/SubComponent.js';
    
    export  default  class  Photo  extends  Component {
		constructor(element, [classes2Render]) {
		    super(element, [SubComponent]);
	    }
	    stateToprops(state){
		    return ({})
		}
		render() {
			return(`
				<div>
					<Subcomponent class="Subcomponent"></subcomponent>
				</div>
			')
		}
	}


# How to start
first clone this repository :)
and use npm

 1. **npm install** // install all the dependencies
 2. **npm start** // start the development server
 3. **npm run build** // webpack build to dist/ folder
 4. **npm run prod** // start the server in production mode
