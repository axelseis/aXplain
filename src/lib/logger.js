import { state } from './store.js'

document.addEventListener('state', (ev) => {
    console.log('action dispatched: ', ev.detail)
    console.log('state changed: ', state)
})
