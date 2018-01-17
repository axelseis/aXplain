import { state } from './store.js'

document.addEventListener('state', (ev) => {
    console.groupCollapsed(ev.detail.type, ev.detail.payload)
    console.log('state:', state)
    console.groupEnd();
})
