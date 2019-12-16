import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom';
expect.extend({ toBeDisabled })

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

test('Displays "unlock gate" and "open gate" when locked and closed', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: true, closed: true }
    });
    getByText(/unlock gate/i);
    getByText(/open gate/i);
});

test('Displays "lock gate" and "open gate" when unlocked and closed', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: false, closed: true }
    });
    getByText(/lock gate/i);
    getByText(/open gate/i);
});

test('Displays "lock gate" and "close gate" when unlocked and open', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
});

test('Unlock gate button unlocks the gate and changes the button to lock', () => {
    const { getByText, findByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: true }
    });
    const button = getByText(/unlock gate/i);
    fireEvent.click(button);
    findByText(/lock gate/i);
});

test('Open gate button opens the gate and changes the button to close', () => {
    const { getByText, findByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: false, closed: true}
    });
    const button = getByText(/open gate/i);
    fireEvent.click(button);
    findByText(/close gate/i);
});

test('Lock gate is disabled if the gate is open', () => {
    const { getByText } = renderWithRedux(<Dashboard />);
    const button = getByText(/lock gate/i);
    expect(button).toBeDisabled();
});

test('Open gate is disabled if the gate is locked', () => {
    const { getByText } = renderWithRedux(<Dashboard />, {
        initialState: { locked: true, closed: true }
    });
    const button = getByText(/open gate/i);
    expect(button).toBeDisabled();
});