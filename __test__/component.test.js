import { jest } from 'jest';
import Component from '../src/lib/Component'
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { setComponentProp } from '../src/lib/actions.js';

let tempComponent, $tempClip;

const uniqueClass = 'uniqueClass';
const sharedClass = 'sharedClass';
const noDomClass = 'noDomClass';

const fakeString = 'Esto es el fake content';
const fakeDOMString = (`
    <div className="class1" onClick="fakeOnClick">content1</div>;
`)

const fakeReducers = {
    setProps: (state, payload) => ({
        ...state,
        ...payload
    })
}
const fakeState = {
    Components: {
        uniqueClass: {inited: true}
    }
}
const fakeComponentProps = { prop2: 'prop2'}

beforeAll(() => {
    $tempClip = document.createElement('div');
    $tempClip.innerHTML = `
        <div class="${uniqueClass}"></div>
        <div class="${sharedClass}"></div>
        <div class="${sharedClass}"></div>
    `

    document.body.appendChild($tempClip);
})

beforeEach(() => {
    initStore(fakeReducers, fakeState)
    if(tempComponent && tempComponent.dispose){
        tempComponent.dispose();
        tempComponent = null;
    }
    tempComponent = new Component(uniqueClass);
})

describe('Constructor: new Component(className)', () => {
    test('throw an Error if there is no element with defined className', () => {
        expect(() => new Component(noDomClass)).toThrowError();
    })
    test('throw an Error if there is more than one element with defined className', () => {
        expect(() => new Component(sharedClass)).toThrowError();
    })
    test('assign DOM Element as Component.$clip property', () => {
        expect(tempComponent.$clip.className).toContain(uniqueClass)
    })
    test('initialize props and Component state', () => {
        expect(state.Components[tempComponent.name]).toEqual({inited:true})
        expect(tempComponent.props.inited).toEqual(true)
    })
    test('start listening state change events', () => {
        const newProps = {prop2: 'prop2'}
        dispatch(setComponentProp(uniqueClass, newProps))
        expect(tempComponent.props.prop1).toEqual(fakeState.Components[uniqueClass].prop1)
        expect(tempComponent.props.prop2).toEqual(newProps.prop2)
    })
})

describe('renderTemplate($domElement, htmlString)', () => {
    test('throw an Error if receive a not valid DOM Element', () => {
        expect(() => tempComponent.renderTemplate()).toThrowError();
    })
    test('throw an Error if receive a not valid HTML string', () => {
        expect(() => tempComponent.renderTemplate(tempComponent.$clip)).toThrowError();
    })
    test('sets the innerHTML of the DOM Element', () => {
        tempComponent.renderTemplate(tempComponent.$clip, fakeString)
        expect(tempComponent.$clip.innerHTML).toEqual(fakeString)
    })
})

describe('_onChangeState() (fired internally when state changes)', () => {
    test('if nothing has changed, do nothing',() => {
        const actProps = tempComponent.props;
        dispatch(setComponentProp(uniqueClass, actProps))
        expect(tempComponent.props === actProps).toBeTruthy();
    })
    describe('if state has new values', () => {
        test('assign new props',() => {
            const actProps = tempComponent.props;
            dispatch(setComponentProp(uniqueClass, fakeComponentProps))
            expect(tempComponent.props === actProps).toBeFalsy();
        })
        test('call render()',() => {
            let mock = false;
            tempComponent.render = () => {
                expect(!mock).toBeTruthy();
            }
            dispatch(setComponentProp(uniqueClass, fakeComponentProps))
        })
        test('if render() returns something pass it to renderTemplate', () => {
            tempComponent.render = () => fakeString
            tempComponent.renderTemplate = ($clip, tplStr) => {
                expect(tplStr).toEqual(fakeString)
            }
            dispatch(setComponentProp(uniqueClass, fakeComponentProps))
        })
    })
})

describe(`_setDomEvents() (fired internally when renderTemplate())`, () => {
    test('assign DOMEvents to Component functions', () => {
        tempComponent.fakeOnClick = (ev) => {
            expect(ev.type).toEqual('click')
        }
        tempComponent.renderTemplate(tempComponent.$clip,fakeDOMString)
        tempComponent.$clip.children[0].dispatchEvent(new MouseEvent('click'));
    })
})

describe('dispose()', () => {
    test('empty the Component', ()  => {
        tempComponent.dispose();
        expect(tempComponent).toEqual({});
    })
})