import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { initialState, reducer } from '../store/reducers';

import Dashboard from './Dashboard';

function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    }
};

test('Defaults to unlocked and open', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('Renders display component correctly', () => {
    const { getByTestId } = renderWithRedux(<Dashboard />);
    getByTestId('display');
});

test('Renders controls component correctly', () => {
    const { getByTestId } = renderWithRedux(<Dashboard />);
    getByTestId('controls');
});