import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as actions from './actions/index';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<BrowserRouter><App.WrappedComponent /></BrowserRouter> , div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('actions', () => {
    jest.useFakeTimers();

    
    it('dispatches showEmptyValueMessage if empty value is going to be stored', () => {
        const expectedActions = { type: actions.SHOW_EMPTY_VALUE_MESSAGE };

        const store = mockStore();

        let res = store.dispatch(actions.storeNewItem({value: null, selection: null})).catch(() => {
            const storeActions = store.getActions();
            expect(storeActions).toContainEqual(expectedActions);
        });
        jest.runAllTimers();
                                                                                   
        return res;
    });
    
    
    it('dispatches showNewItemAddedMessage if empty value is going to be stored', () => {
        window.localStorage = {
            getItem: jest.fn(),
            setItem: jest.fn()
        };
        const expectedActions = { type: actions.SHOW_NEW_ITEM_MESSAGE };

        const store = mockStore();
        let res = store.dispatch(actions.storeNewItem({value: 'value', selection: '5'}))
            .then(() => {
                const storeActions = store.getActions();

                expect(storeActions).toContainEqual(expectedActions);
        });

        jest.runAllTimers();
                                                                                   
        return res;
    });
    
    
});
