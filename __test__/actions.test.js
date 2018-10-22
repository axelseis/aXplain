import { jest } from 'jest';
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { actions, setLocation, reducers } from '../src/lib/actions.js';

 const fakeValues = [
    '',null,{param1:'param1',param2:'param2'},[1,2,3], () => 'paramfunction'
]

describe('Action Creators:', () => {
    describe('setLocation(url, route, {params, props})', () => {
        describe(`expect returns an Action like {type:${actions.SET_LOCATION}, payload:{routes: []}}`, () => {
            test(`expect Action.type to be ${actions.SET_LOCATION}`, () => {
                const action = setLocation('')
                expect(action.type).toEqual(actions.SET_LOCATION);
            })
        })
        test(`expect Action.payload contains url & route & params Object & props Array`, () => {
            let action;

            fakeValues.forEach((url) => {
                fakeValues.forEach((route) => {
                    fakeValues.forEach((props) => {
                        fakeValues.forEach((params) => {
                            action = setLocation(url, route, props, params)
                            expect(action.payload.url).toEqual(url);
                            expect(action.payload.route).toEqual(route);
                            expect(action.payload.props).toEqual(props);
                            expect(action.payload.params).toEqual({...params});
                        })
                    })
                })
            })
        })
        test(`expect dispatch(setLocation(route,props,params)) to add route & {params} & props into state.router with no Error thrown`, () => {
            initStore([],{});
            fakeValues.forEach((url) => {
                fakeValues.forEach((route) => {
                    fakeValues.forEach((props) => {
                        fakeValues.forEach((params) => {
                            dispatch(setLocation(url, route, props, params))
                            expect(state.router.url).toEqual(url);
                            expect(state.router.route).toEqual(route);
                            expect(state.router.params).toEqual({...params});
                            expect(state.router.props).toEqual(props);
                        })
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
