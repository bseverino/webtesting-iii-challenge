import React from 'react';
import { renderWithRedux } from '../utils/renderWithRedux';

import Dashboard from './Dashboard';

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