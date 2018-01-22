import { jest } from 'jest';
import { state, initStore, dispatch, dispatchAction } from '../src/lib/store'
import { initRouter, go } from '../src/lib/router'
import { actions, setLocation } from '../src/lib/actions'

const testRoutes = [
    {url: '/'},
    {url: '/section1'},
    {url: '/section1/:param1'},
    {url: '/section1/:param1/:param2'},
    {url: '/section2/:param1/subsection1'}
]

const trueUrls = [
    { url: '/section1', params: {}},
    { url: '/section1/param1', params: {param1:'param1'} },
    { url: '/section1/param1/param2', params: {param1:'param1',param2:'param2'} },
    { url: '/section2/param1/subsection1', params: {param1:'param1'} }
]

beforeEach(() => {
    window.history.pushState = function(data,title,url){
        //Only mock
    }
    initRouter(testRoutes);
})

describe('initRouter()', () => {
    test('expect add routerReducers to store', () => {
        dispatchAction(actions.SET_LOCATION, {param:true})
        expect(state.router.param).toBeTruthy();
    })
})

describe('go(url)', () => {
    test('if url=null expect to go first route defined', () => {
        window.history.pushState = function(data,title,url){
            expect(url).toEqual(testRoutes[0].url);
        }
        go()
    })

    test('if url not match any route expect to throw an error', () => {
        expect(() => { go('route/not/defined') }).toThrowError();
    })

    describe('if url match a route', () => {
        trueUrls.forEach(trueUrl => {
            describe(`url = ${trueUrl.url}`, () => {
                test(`expect state.router.route toEqual ${trueUrl.url}`, () => {
                    go(trueUrl.url);
                    expect(state.router.route).toEqual(trueUrl.url)
                })
                test(`expect state.router.params toEqual ${trueUrl.params}`, () => {
                    go(trueUrl.url);
                    expect(state.router.params).toEqual(trueUrl.params)
                })
            })
        })
    })
})

