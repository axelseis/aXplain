import { jest } from 'jest';
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store.js';
import { 
    actions,
    setComponentProp,
    setRoutes,
    setLocation,
    reducers
 } from '../src/lib/actions.js';

 const fakeValues = [
    '',null,{name:'lalala','lalala':'tu'},[1,2,3], () => 'lalala'
]

describe('Action Creators:', () => {
    describe('setComponentProp(componentName,props)', () => {
        describe(`expect returns an Action like {type:${actions.SET_COMPONENT_PROP}, payload:{componentName}}`, () => {
            test(`expect Action.type to be ${actions.SET_COMPONENT_PROP}`, () => {
                const action = setComponentProp('',{})
                expect(action.type).toEqual(actions.SET_COMPONENT_PROP);
            })
        })
        test(`expect Action.payload.componentName to be always equal componentName`, () => {
            fakeValues.forEach((componentName) => {
                const action = setComponentProp(componentName,{})
                expect(action.payload.componentName).toEqual(componentName);
            })
        })
        test(`expect action.payload contains new props`, () => {
            fakeValues.forEach((props) => {
                const action = setComponentProp('',props)
                const {componentName, ...rest} = {...action.payload}
                expect(rest).toEqual({...props});
            })
        })
        test(`expect dispatch(setComponentProp(componentName,props)) to add props into state.Components[componentName] with no Error thrown`, () => {
            initStore([],{});
            fakeValues.forEach((props) => {
                const tempName = 'mycomp'
                dispatch(setComponentProp(tempName,props))
                const newprops = state.Components[tempName]
                expect(newprops).not.toBeNull();
                expect({...props,...newprops}).toEqual(newprops);
            })
        })
    })

    describe('setRoutes(routesArray)', () => {
        describe(`expect returns an Action like {type:${actions.SET_ROUTES}, payload:{routes: []}}`, () => {
            test(`expect Action.type to be ${actions.SET_ROUTES}`, () => {
                const action = setRoutes([])
                expect(action.type).toEqual(actions.SET_ROUTES);
            })
        })
        test(`expect Action.payload contains only a routes Array property equal to routesArray`, () => {
            fakeValues.forEach((routesArray) => {
                const action = setRoutes(routesArray)
                const {routes, ...rest} = {...action.payload}
                expect(rest).toEqual({});
                expect(Array.isArray(routes)).toBeTruthy();
            })
        })
        test(`expect dispatch(setRoutes(routesArr)) to add routes Array into state.router with no Error thrown`, () => {
            initStore([],{});
            fakeValues.forEach((routesArray) => {
                const action = setRoutes(routesArray)
                expect(() => dispatch(setRoutes(routesArray))).not.toThrowError();
                expect(Array.isArray(state.router.routes)).toBeTruthy()
            })
        })
    })

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
    describe(`initComponent(state, payload) => dispatched by Action type [${actions.INIT_COMPONENT}]`, () => {
        test(`if do not exists payload.componentName expect state to have same values`, () => {
            initStore([],{})
            const oldstate = {...state}
            const payload = {randomprop: name}
            dispatchAction(actions.INIT_COMPONENT,payload);
            expect(state).toEqual(oldstate);
        })
        test(`expect exist state.Components[payload.componentName] property and has value {inited:true}`, () => {
            initStore([],{})
            fakeValues.forEach((name) => {
                const payload = {componentName: (name || 'randomname')}
                dispatchAction(actions.INIT_COMPONENT,payload);
                expect(state.Components[payload.componentName]).toEqual({inited:true});
            })
        })
    })

    describe(`removeComponent(state, payload) => dispatched by Action type [${actions.REMOVE_COMPONENT}]`, () => {
        test(`if do not exists payload.componentName expect state to have same values`, () => {
            initStore([],{})
            const oldstate = {...state}
            const payload = {randomprop: name}
            dispatchAction(actions.REMOVE_COMPONENT,payload);
            expect(state).toEqual(oldstate);
        })
        test(`expect to not exist state.Components[payload.componentName] property`, () => {
            initStore([],{})
            fakeValues.forEach((name) => {
                const payload = {componentName: name  || 'randomname'}
                dispatchAction(actions.INIT_COMPONENT,payload);
                expect(state.Components[payload.componentName]).toEqual({inited:true});
                dispatchAction(actions.REMOVE_COMPONENT,payload);
                expect(state.Components && !state.Components[payload.componentName]).toBeFalsy();
            })
        })
    })
})