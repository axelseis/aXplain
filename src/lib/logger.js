import { state } from './store.js'

document.addEventListener('action', (ev) => {
    console.log('action', ev.detail)
})

document.addEventListener('state', (ev) => {
    console.log('state changed: ', state)
})
