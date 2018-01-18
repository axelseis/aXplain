import { jest } from 'jest';
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { 
    actions,
    setComponentProp,
    setRoutes,
    setLocation,
    reducers
 } from '../src/lib/actions.js';

const fakeState = {
    Components: {
        uniqueClass: {inited: true}
    }
}
const fakeComponentProps = { prop2: 'prop2'}

beforeAll(() => {
})

beforeEach(() => {
})

describe('Action Creators:', () => {
    describe('setComponentProp(componentName,props)', () => {
        test(`expect returns an Action {type:'', payload:{}}`)
        expect(() => new Component(noDomClass)).toThrowError();
    })
})

