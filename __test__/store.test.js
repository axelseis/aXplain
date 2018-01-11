import { jest } from 'jest';
import { state, initStore } from '../src/lib/store'

beforeAll(() => {
    initStore([],{});
})

describe('before init the store', () => {
    test('expect state to be {}', () => {
        expect(state).toEqual({});
    })
})

describe('when initStore([], initialState)', () => {
    const initialState = {
        init: true
    }
    
    test('expect state to equal initialState', () => {
        initStore([], initialState);
        expect(state).toEqual(initialState);
    })
}) 

/*
const actions = {
    ACTION_1: 'ACTION_1'
}

function action1(param){
    return {
        type: actions.ACTION_1,
        param: param
    }
}

const reducers1 = {
    [actions.ACTION_1]: (state, action) => ({
        ...state,
        reducer1: 'passed',
        'param1': action.param
    })
}
*/
