import { jest } from 'jest';
import Component from '../src/lib/Component'
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { DOMUpdates } from './DOMUpdates.js';

let tempComponent, $tempClip;

const UNIQUE_CLASS = 'UNIQUE_CLASS';
const SHARED_CLASS = 'SHARED_CLASS';
const NO_DOM_CLASS = 'NO_DOM_CLASS';
const UNIQUE_PROP = 'UNIQUE_PROP';
const FAKE_CLASS = 'FAKE_CLASS';
const FAKE_ONCLICK = 'FAKE_ONCLICK';
const CONTENT_INIT = 'CONTENT_INIT';
const CONTENT_UPDATE = DOMUpdates;

const fakeString = 'Esto es el fake content';

const fakeDOMString = (newClass, newInnerHTML, clickEvent) => (`
    <div class="${newClass}"${clickEvent ? ` onclick=${clickEvent}` : ''}>${newInnerHTML}</div>
`).trim();

const fakeDOMInit = fakeDOMString(FAKE_CLASS, CONTENT_INIT);
const fakeDOMClick = fakeDOMString(FAKE_CLASS, CONTENT_INIT, FAKE_ONCLICK)
const fakeDOMUpdated = fakeDOMString(FAKE_CLASS, CONTENT_UPDATE[0])

const fakeReducers = {
    setProps: (state, payload) => ({
        ...state,
        ...payload
    })
}
const fakeState = {
    Components: {
        UNIQUE_CLASS: {inited: true}
    }
}
const fakeComponentProps = { prop2: 'prop2'}

beforeAll(() => {
    $tempClip = document.createElement('div');
    $tempClip.innerHTML = `
        <div class="${UNIQUE_CLASS}"></div>
        <div class="${SHARED_CLASS}"></div>
        <div class="${SHARED_CLASS}"></div>
    `
    document.body.appendChild($tempClip);
})

beforeEach(() => {
    initStore(fakeReducers, fakeState)
    if(tempComponent && tempComponent.dispose){
        const tem = tempComponent.$clip;
        tempComponent.$clip.innerHTML = ''
        tempComponent.dispose();
        tempComponent = null;
    }
    tempComponent = new Component(UNIQUE_CLASS);
})

describe('Constructor: new Component(className)', () => {
    test('throw an Error if there is no element with defined className', () => {
        expect(() => new Component(NO_DOM_CLASS)).toThrowError();
    })
    test('throw an Error if there is more than one element with defined className', () => {
        expect(() => new Component(SHARED_CLASS)).toThrowError();
    })
    test('assign DOM Element as Component.$clip property', () => {
        expect(tempComponent.$clip.className).toContain(UNIQUE_CLASS)
    })
    test('add _onChangeSate as listener for "state" events', () => {
        tempComponent._onChangeState = (ev) => {
            expect(ev.type).toEqual('state');
        }
        document.dispatchEvent(new CustomEvent('state'))
    })
})

describe('renderTemplate($domElement, htmlString)', () => {
    test('throw an Error if receive a not valid DOM Element', () => {
        expect(() => tempComponent.renderTemplate()).toThrowError();
    })
    test('throw an Error if receive a not valid HTML string', () => {
        expect(() => tempComponent.renderTemplate(tempComponent.$clip)).toThrowError();
    })
    test('sets the innerHTML of $domElement', () => {
        const tempDom = document.createElement('div');
        tempDom.innerHTML = fakeDOMInit;

        tempComponent.renderTemplate(tempComponent.$clip, fakeDOMInit)
        expect(tempComponent.$clip.innerHTML).toEqual(tempDom.innerHTML)
    })
    test('if $domElement has children call _updateDomElement(oldDom, newDom)', () => {
        let fakeCallback = 0;
        tempComponent._updateDomElement = (oldDom, newDom) => {
            fakeCallback++
        }

        tempComponent.renderTemplate(tempComponent.$clip, fakeDOMInit)
        expect(fakeCallback).toEqual(0);
        tempComponent.renderTemplate(tempComponent.$clip, fakeDOMUpdated)
        expect(fakeCallback).toBe(1);
    })
})

describe(`_updateDomElement(oldDom,newDom), called internally when renderTemplate()`, () => {
    describe(`do not replace domElements, only updates their contents`, () => {
        test('the innerHTML if has changed', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDOMInit)
            var baseDom = document.createElement('div');
            
            CONTENT_UPDATE.forEach(update => {
                tempComponent.renderTemplate(
                    tempComponent.$clip, 
                    update
                )
                expect(tempComponent.$clip.innerHTML).toEqual(update)
            })
        })
        test('the value of each attribute that has different value', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDOMInit)
            const origNode = tempComponent.$clip.querySelector(`.${FAKE_CLASS}`)

            const classUpdated = 'classUpdated';
            const fakeDomClassUpdated = fakeDOMString(classUpdated,CONTENT_INIT)

            tempComponent.renderTemplate(tempComponent.$clip, fakeDomClassUpdated)
            const newNode = tempComponent.$clip.querySelector(`.${classUpdated}`)

            expect(newNode).toEqual(origNode)
            expect(origNode.className).toEqual(classUpdated)
        })
        test('if the new Element has different NodeName replaces the older', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDOMInit)
            const origNode = tempComponent.$clip.querySelector(`.${FAKE_CLASS}`)

            const fakeDomTotallyNew = `<p class="${FAKE_CLASS}">he cambiado tanto :(</p>`
            tempComponent.renderTemplate(tempComponent.$clip, fakeDomTotallyNew)
            const newNode = tempComponent.$clip.querySelector(`.${FAKE_CLASS}`)

            expect(newNode).not.toEqual(origNode)
        })
        test('if the new Element has less children than older, removes the leftover', () => {
            const oldDomLotOfChildren = `${fakeDOMString('uno')}${fakeDOMString('dos')}${fakeDOMString('tres')}`
            const oldDomLessChildren = `${fakeDOMString('uno', CONTENT_INIT)}`

            tempComponent.renderTemplate(tempComponent.$clip, oldDomLotOfChildren)
            expect(tempComponent.$clip.children.length).toEqual(3)
            const firstChild = tempComponent.$clip.children[0]
            
            tempComponent.renderTemplate(tempComponent.$clip, oldDomLessChildren)
            expect(tempComponent.$clip.children.length).toEqual(1)
            
            expect(firstChild.innerHTML).toEqual(CONTENT_INIT)
        })
    })
})

/* TODO: rewrite these tests calling _onChangeState() directly
describe('_onChangeState() (fired internally when state changes)', () => {
    test('if nothing has changed, do nothing',() => {
        const actProps = tempComponent.props;
        dispatch(setComponentProp(UNIQUE_CLASS, actProps))
        expect(tempComponent.props === actProps).toBeTruthy();
    })
    describe('if state has new values', () => {
        test('assign new props',() => {
            const actProps = tempComponent.props;
            dispatch(setComponentProp(UNIQUE_CLASS, fakeComponentProps))
            expect(tempComponent.props === actProps).toBeFalsy();
        })
        test('call render()',() => {
            let mock = false;
            tempComponent.render = () => {
                expect(!mock).toBeTruthy();
            }
            dispatch(setComponentProp(UNIQUE_CLASS, fakeComponentProps))
        })
        test('if render() returns something pass it to renderTemplate', () => {
            tempComponent.render = () => fakeString
            tempComponent.renderTemplate = ($clip, tplStr) => {
                expect(tplStr).toEqual(fakeString)
            }
            dispatch(setComponentProp(UNIQUE_CLASS, fakeComponentProps))
        })
    })
})
*/

describe(`_setDomEvents() (fired internally when renderTemplate())`, () => {
    test('assign DOMEvents to Component functions', () => {
        let fakeClicks = 0;
        tempComponent[FAKE_ONCLICK] = (ev) => {
            fakeClicks ++;
        }
        tempComponent.renderTemplate(tempComponent.$clip,fakeDOMClick)
        expect(fakeClicks).toEqual(0)
        tempComponent.$clip.children[0].dispatchEvent(new MouseEvent('click'));
        expect(fakeClicks).toEqual(1)
    })
})

describe('dispose()', () => {
    test('empty the Component', ()  => {
        tempComponent.dispose();
        expect(tempComponent).toEqual({});
    })
})
