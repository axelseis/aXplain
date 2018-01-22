import { jest } from 'jest';
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { actions, setLocation, reducers } from '../src/lib/actions.js';

 const fakeValues = [
    '',null,{name:'lalala','lalala':'tu'},[1,2,3], () => 'lalala'
]

describe('Action Creators:', () => {
    describe('setLocation(route, {params, props})', () => {
        describe(`expect returns an Action like {type:${actions.SET_ROUTES}, payload:{routes: []}}`, () => {
            test(`expect Action.type to be ${actions.SET_LOCATION}`, () => {
                const action = setLocation([])
                expect(action.type).toEqual(actions.SET_LOCATION);
            })
        })
        test(`expect Action.payload contains route & params Object & props Array`, () => {
            let action;

            fakeValues.forEach((route) => {
                fakeValues.forEach((props) => {
                    fakeValues.forEach((params) => {
                        action = setLocation(route, props, params)
                        expect(action.payload.route).toEqual(route);
                        expect({...props, ...action.payload}).toEqual(action.payload);
                        expect({params, ...action.payload}).toEqual(action.payload);
                    })
                })
            })
        })
        test(`expect dispatch(setLocation(route,props,params)) to add route & {params} & props into state.router with no Error thrown`, () => {
            initStore([],{});
            fakeValues.forEach((route) => {
                fakeValues.forEach((props) => {
                    fakeValues.forEach((params) => {
                        dispatch(setLocation(route, props, params))
                        expect(state.router.route).toEqual(route);
                        expect({...params, ...state.router.params}).toEqual(state.router.params);
                        expect({...props, ...state.router}).toEqual(state.router);
                    })
                })
            })
        })
    })
})

describe(`Reducers:`, () => {
    describe(`setRouterPayload(state, payload)`, () => {
        test(`expect add all payload properties to state.router`, () => {
            initStore([],{})
            const oldstate = {...state}
            const payload = {randomprop: "randomprop"}
            const newState = reducers[actions.SET_LOCATION](state,payload);

            expect(newState).not.toEqual(oldstate);
            expect(newState.router.randomprop).toEqual("randomprop");
        })
    })
})
