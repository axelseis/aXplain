
import Component from '../../lib/Component.js'
import { initStore, state } from '../../lib/store.js';
import { initRouter } from '../../lib/router.js';
import "../../lib/logger.js";

import {initialState} from '../initialState.js';

import Header from '../Header/Header.js';
import Team from '../Team/Team.js';

import { getUsers, reducers } from './actions.js';
import { reducers as headerReducers } from '../Header/actions.js';
import { reducers as userReducers } from '../User/actions.js';

const routes = [
    { url: "/" },
    { url: "/orderBy/:paramId" },
    { url: "404", redirect: "/" }
]

export default class App extends Component {
    constructor(className) {
        super(className, [Header,Team]);
        this.initApp();
    }
    
    initApp(){
        
        initialState.filters = state.filters || initialState.filters;
        initStore([reducers,headerReducers,userReducers], {...state,...initialState});
        initRouter(routes, BASE_URL || '');

        getUsers();
    }

    stateToprops(state){
        const {App:{scrollbarWidth}={}} = {...state}
        return ({ 
            scrollbarWidth
        })
    }

    render() {
        return(/*html*/`
            <style scoped>
                .Header {
                    right: ${this.props.scrollbarWidth}
                }
            </style>
            <Header class="Header"></Header>
            <Team class="Team"></Team>
        `)
    }
}

