import { jest } from 'jest';
import Component from '../src/lib/Component'
import { initStore, dispatchAction } from '../src/lib/store.js';

let tempComponent, $tempClip;
const noDOMElement = 'no dom element';
const fakeReducers = {
        setProps: (state, props) => ({
            ...state,
            ...props
        })
    }
const fakeState = {
    component: {
        prop1: 'prop1'
    }
}

beforeAll(() => {
    initStore(fakeReducers, fakeState)
})

beforeEach(() => {
    $tempClip = document.createElement('tempComp');
    tempComponent = new Component($tempClip)
})

describe('Constructor: new Component(clip)', () => {
    test('expect throw an Error if clip is not DOMElement', () => {
        expect(() => new Component(noDOMElement)).toThrowError();
    })
    test('expect assign the DOMElement as $clip property', () => {
        expect(tempComponent.$clip).toEqual($tempClip)
    })
    test('expect initalize props with actual state', () => {
        expect(tempComponent.props).toEqual(fakeState)
    })
    test('expect start listening state change events', () => {
        dispatchAction('setProps', {prop2: 'prop2'})
        expect(tempComponent.props.prop2).toEqual('prop2')
    })
})
