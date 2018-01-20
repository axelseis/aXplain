import { jest } from 'jest';
import StringTplComponent from '../src/lib/StringTplComponent'
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { setComponentProp } from '../src/lib/actions.js';

let tempComponent, $tempClip;

const UNIQUE_CLASS = 'UNIQUE_CLASS';
const UNIQUE_PROP = 'UNIQUE_PROP';
const FAKE_CLASS = 'FAKE_CLASS';
const CONTENT_INIT = 'CONTENT_INIT';
const CONTENT_UPDATE = 'content updated'

const fakeDOMString = (newClass, newInnerHTML) => (`
    <div class="${newClass}">${newInnerHTML}</div>;
`)

const fakeDomInit = fakeDOMString(FAKE_CLASS, CONTENT_INIT);
const fakeDOMUpdated = fakeDOMString(FAKE_CLASS, CONTENT_UPDATE)

beforeAll(() => {
    $tempClip = document.createElement('div');
    $tempClip.innerHTML = `
        <div class="${UNIQUE_CLASS}"></div>
    `
    document.body.appendChild($tempClip);
});

beforeEach(() => {
    initStore([], {})
    if (tempComponent && tempComponent.dispose) {
        tempComponent.$clip.innerHTML = '';
        tempComponent.dispose();
        tempComponent = null;
    }
    tempComponent = new StringTplComponent(UNIQUE_CLASS);
})

describe('renderTemplate($domElement, htmlString)', () => {
    test('throw an Error if receive a not valid DOM Element', () => {
        expect(() => tempComponent.renderTemplate()).toThrowError();
    })
    test('throw an Error if receive a not valid HTML string', () => {
        expect(() => tempComponent.renderTemplate(tempComponent.$clip)).toThrowError();
    })
    test('sets the innerHTML of $domElement', () => {
        tempComponent.renderTemplate(tempComponent.$clip, fakeDomInit)
        expect(tempComponent.$clip.innerHTML.toLowerCase()).toEqual(fakeDomInit.toLowerCase())
    })
    test('if $domElement has children call _updateDomElement(oldDom, newDom)', () => {
        let mockCallback = 0;
        tempComponent._updateDomElement = (oldDom, newDom) => {
            mockCallback++
        }

        tempComponent.renderTemplate(tempComponent.$clip, fakeDomInit)
        expect(mockCallback).toBe(0);
        tempComponent.renderTemplate(tempComponent.$clip, fakeDOMUpdated)
        expect(mockCallback).toBe(1);
    })
})

describe(`_updateDomElement(oldDom,newDom), called internally when renderTemplate()`, () => {
    describe(`do not replace domElements, only updates their contents`, () => {
        test('the innerHTML if has changed', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDomInit)
            const tempNode = tempComponent.$clip.querySelector(`.${FAKE_CLASS}`)
            
            tempComponent.renderTemplate(tempComponent.$clip, fakeDOMUpdated)
            expect(tempNode.innerHTML).toEqual(CONTENT_UPDATE)
        })
        test('the value of each attribute that has different value', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDomInit)
            const origNode = tempComponent.$clip.querySelector(`.${FAKE_CLASS}`)
            
            const classUpdated = 'classUpdated';
            const fakeDomClassUpdated = fakeDOMString(classUpdated,CONTENT_INIT)
            
            tempComponent.renderTemplate(tempComponent.$clip, fakeDomClassUpdated)
            const newNode = tempComponent.$clip.querySelector(`.${classUpdated}`)

            expect(newNode).toEqual(origNode)
            expect(origNode.className).toEqual(classUpdated)
        })
        test('if the new Element has different NodeName replaces the older', () => {
            tempComponent.renderTemplate(tempComponent.$clip, fakeDomInit)
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