import { state } from './store.js'

const isDev = parseFloat(window.location.port) === 3000;

export function init(){
    if(isDev){
        document.addEventListener('state', (ev) => {
            const {type,payload} = {...ev.detail};
            if(type.indexOf('nolog') === -1){
                console.groupCollapsed(type, payload)
                console.log('state:', state)
                console.groupEnd();
            }
        })
    }
}

export function log(message) {
    if(isDev){
        console.log(message);
    }
}