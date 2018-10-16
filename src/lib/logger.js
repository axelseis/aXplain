import { state } from './store.js'

if(window.env && env === 'dev'){
    document.addEventListener('state', (ev) => {
        const type = ev.detail.type;
        if(type.indexOf('nolog') === -1){
            console.groupCollapsed(type, ev.detail.payload)
            console.log('state:', state)
            console.groupEnd();
        }
    })
}

