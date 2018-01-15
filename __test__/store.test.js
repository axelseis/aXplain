import { jest } from 'jest';
import { state, initStore, dispatch } from '../src/lib/store'

const reducer1 = {
    action1: (state, params) => ({
        ...state,
        ...params
    })
}
const action1 = () => ({
    type: 'action1',
    params: {
        param1: 'param1'
    }
})

const notObj = 'notObjectNorArray';
const initialState = {
    init: true
}

describe('before init the store', () => {
    test('expect state to be {}', () => {
        expect(state).toEqual({});
    })
    test('expect calling dispatch throws an error', () => {
        expect(() => { dispatch(action1) }).toThrowError();
    })
})

describe('initStore(reducers,initialState)', () => {
    describe('if initialState != Object', () => {
        test('expect throw an Error ', () => {
            expect(() => { initStore([], notObj) }).toThrowError();
        })
    })
    describe('if initialState=Object', () => {
        test('expect state to equal initialState', () => {
            initStore([], initialState);
            expect(state).toEqual(initialState);
        })
    })
    describe('if reducers is not object nor array', () => {
        test('expect throw an Error', () => {
            expect(() => { initStore(notObj, initialState) }).toThrowError();
        })
    })
})

describe('dispatch(action) || dispatchAction(type,params)', () => {

    describe(`dispatch action with missing type`, () => {
        test('expect to throw an error', () => {
            initStore(reducer1, {});
            expect(() => { dispatchAction('action2') }).toThrowError();
        })
    })
    describe(`dispatch() malformed action`, () => {
        test('expect to throw an error', () => {
            initStore(reducer1, {});
            expect(() => { dispatch('action1') }).toThrowError();
        })
    })
    describe(`dispatch() existing action`, () => {
        test(`expect state to change`, () => {
            initStore(reducer1, {});
            dispatch(action1());
            expect(state.param1).toBe(action1().params.param1)
        })
        test(`expect to dispatch a CustomEvent('state')`, () => {
            document.addEventListener('state', (ev) => {
                expect(ev).toBeInstanceOf(CustomEvent)
                expect(ev.type).toBe('state')
            })
            initStore(reducer1, {});
            dispatch(action1());
        })
    })
})
