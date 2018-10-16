import Component from '../../lib/Component.js'
import {mapEvent} from '../../lib/utils.js'
import {go} from '../../lib/router.js'
import {getLiterals,setMousePosition,setWindowSize, setNextFrame} from './actions.js';
import { areClipPathShapesSupported } from '../../utils.js';

import Enjoy from '../Enjoy/Enjoy.js';
import Feed from '../Feed/Feed.js';
import Multiscreen from '../Multiscreen/Multiscreen.js';
import Highlights from '../Highlights/Highlights.js';
import Quality from '../Quality/Quality.js';
import Replay from '../Replay/Replay.js';
//import Sound from '../Sound/Sound.js'; 
//uncomment previous line & add Sound to compClasses to allow Sound section appears
import Nospoiler from '../Nospoiler/Nospoiler.js';
import Library from '../Library/Library.js';
import Devices from '../Devices/Devices.js';

import Loader from './Loader.js';

const compClasses = [Enjoy, Feed, Multiscreen, Highlights, Quality, Replay, Nospoiler, Library, Devices];

export default class Landing extends Component {

    constructor(className) {
        super(className, compClasses);

        this.inited = false;
        
        window.addEventListener(mapEvent('resize'), setWindowSize)
        window.addEventListener(mapEvent('mousemove'), (ev) => {
            setMousePosition(ev);
        })

        setWindowSize();
        getLiterals();
    }

    stateToprops(state) {
        const loaded = state.literals && state.literals !== null;

        if (loaded && this.inited) {
            const compNames = Object.keys(this._components);
            const lastComp = this._components[compNames[compNames.length-1]];
            const firstComp = compNames[0];

            const lastCompShowing = compNames.reverse().find(compName => {
                const component = this._components[compName];
                const winPorc = component ===  lastComp ? 0.4 : 0.2
                const compRect = component.$clip.getBoundingClientRect();
                return (
                    component.showing &&
                    compRect.top < state.App.winH * winPorc
                )
            }) || firstComp;
            go(`/${this._components[lastCompShowing].name}`, false)
        }

        return ({
            loaded
        })
    }

    goDeepLink() {
        const deepLink = window.location.pathname.replace('/', '')
        if (deepLink !== '/') {
            const compNames = Object.keys(this._components);
            const compShowing = compNames.find(name => name.indexOf(deepLink) !== -1);
            if (compShowing) {
                setTimeout(() => {
                    const winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                    const compY = this._components[compShowing].$clip.getBoundingClientRect().top
                    window.scrollTo(0, compY);
                }, 500)
            }
        }
    }

    onEndRender() {
        if (this.props.loaded && !this.inited) {
            this.inited = true;
            this.goDeepLink();
            setInterval(setNextFrame, 3000);
        }
    }

    render() {
        const sectionStyle = `Landing__section clippath--${areClipPathShapesSupported()}`
        return (`
            ${Loader(this.props.loaded)}
            ${this.props.loaded ? `
                ${compClasses.map(classDef => {
                    return(`
                    <${classDef.name} class="${sectionStyle} ${classDef.name}"></${classDef.name}>
                    `)
                }).join('')}
            ` : ''}
        `)
    }
}

