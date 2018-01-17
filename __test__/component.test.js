import { jest } from 'jest';
import Component from '../src/lib/Component'
import { initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { setComponentProp } from '../src/lib/actions.js';

let tempComponent, $tempClip;

const uniqueClass = 'uniqueClass';
const sharedClass = 'sharedClass';
const noDomClass = 'noDomClass';

const fakeContent = 'Esto es el fake content';

const fakeReducers = {
    setProps: (state, payload) => ({
        ...state,
        ...payload
    })
}

const fakeState = {
    Components: {
        uniqueClass: {
            inited: true,
            prop1: 'prop1'
        }
    }
}

beforeAll(() => {
    initStore(fakeReducers, fakeState)
    $tempClip = document.createElement('div');
    $tempClip.innerHTML = `
        <div class="${uniqueClass}"></div>
        <div class="${sharedClass}"></div>
        <div class="${sharedClass}"></div>
    `

    document.body.appendChild($tempClip);
})

beforeEach(() => {
    if(tempComponent && tempComponent.dispose){
        tempComponent.dispose();
        tempComponent = null;
    }
})
describe('Constructor: new Component(className)', () => {
    test('throw an Error if there is no element with defined className', () => {
        expect(() => new Component(noDomClass)).toThrowError();
    })
    test('throw an Error if there is more than one element with defined className', () => {
        expect(() => new Component(sharedClass)).toThrowError();
    })
    test('assign DOM Element as Component.$clip property', () => {
        tempComponent = new Component(uniqueClass);
        expect(tempComponent.$clip.className).toContain(uniqueClass)
    })
    test('initialize props with actual state', () => {
        tempComponent = new Component(uniqueClass);
        expect(tempComponent.props).toEqual(fakeState.Components.uniqueClass)
    })
    test('start listening state change events', () => {
        const newProps = {prop2: 'prop2'}
        tempComponent = new Component(uniqueClass);
        dispatch(setComponentProp(uniqueClass, newProps))
        expect(tempComponent.props.prop1).toEqual(fakeState.Components[uniqueClass].prop1)
        expect(tempComponent.props.prop2).toEqual(newProps.prop2)
    })
})

describe('renderTemplate($domElement, htmlString)', () => {
    test('throw an Error if receive a not valid DOM Element', () => {
        tempComponent = new Component(uniqueClass);
        expect(() => tempComponent.renderTemplate()).toThrowError();
    })
    test('throw an Error if receive a not valid HTML string', () => {
        tempComponent = new Component(uniqueClass);
        expect(() => tempComponent.renderTemplate(temp)).toThrowError();
    })
    test('sets the innerHTML of the DOM Element', () => {
        tempComponent = new Component(uniqueClass);
        tempComponent.renderTemplate(tempComponent.$clip, fakeContent)
        expect(tempComponent.$clip.innerHTML).toEqual(fakeContent)
    })
})
