import { jest } from 'jest';
import { state, initStore, dispatch } from '../src/lib/store'

beforeAll(() => {
    initStore([],{});
})

describe('before init the store', () => {
    test('expect state to be {}', () => {
        expect(state).toEqual({});
    })
})

describe('initStore(reducers,initialState)', () => {
    const notObj = 'notObjectNorArray';
    const initialState = {
        init: true
    }

    describe('if initialState != Object', () => {
        test('expect throw an Error', () => {
            expect(() => {initStore([], notObj)}).toThrowError();
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
            expect(() => {initStore(notObj, initialState)}).toThrowError();
        })
    })
})

describe('dispatch(action) || dispatchAction(type,params)', () => {
    const reducer1 = {
        action1: (state,action) => ({
            ...state,
            ...action.params
        })
    }
    const action1 = () => ({
        type:'action1',
        params:{
            param1: 'param1'
        }
    })
    describe(`if reducers contains a single reducer with name action1`, () => {
        describe(`if dispatch an action with type 'action2'`, () => {
            test('expect to throw an error', () => {
                initStore(reducer1, {});
                expect(() => {dispatchAction('action2')}).toThrowError();
            })
        })
        describe(`if dispatch an action with type 'action1'`, () => {
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
})
