import { jest } from 'jest';
import Component from '../src/lib/Component'
import { initStore, dispatchAction } from '../src/lib/store.js';
import { setComponentProp } from '../src/lib/actions.js';

let tempComponent, $tempClip;
const noDOMElement = 'no dom element';
const fakeReducers = {
        setProps: (state, props) => ({
            ...state,
            Component: {
                ...props
            }
        })
    }
const fakeState = {
    Component: {
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
    test('throw an Error if clip is not DOMElement', () => {
        expect(() => new Component(noDOMElement)).toThrowError();
    })
    test('assign clip as Component.$clip property', () => {
        expect(tempComponent.$clip).toEqual($tempClip)
    })
    test('initialize props with actual state', () => {
        expect(tempComponent.props).toEqual(fakeState.Component)
    })
    test('start listening state change events', () => {
        const newProps = {prop2: 'prop2'}
        setComponentProp('Component', newProps)
        expect(tempComponent.props.prop1).toEqual(fakeState.Component.prop1)
        expect(tempComponent.props.prop2).toEqual(newProps.prop2)
    })
})

