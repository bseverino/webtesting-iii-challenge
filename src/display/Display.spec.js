import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
expect.extend({ toHaveClass });

import { initialState, reducer } from '../store/reducers';

import Dashboard from '../dashboard/Dashboard';

function renderWithRedux(
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    }
};

test('When gate is locked, displays "locked" and background is red', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: true }
    });
    expect(getByText('Locked')).toHaveClass('red-led');  
});

test('When gate is unlocked, displays "unlocked" and background is green', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: false }
    });
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
});

test('When gate is closed, displays "closed" and background is red', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { closed: true }
    });
    expect(getByText(/closed/i)).toHaveClass('red-led');   
});

test('When gate is open, displays "open" and background is green', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { closed: false }
    });
    expect(getByText(/open/i)).toHaveClass('green-led');
});