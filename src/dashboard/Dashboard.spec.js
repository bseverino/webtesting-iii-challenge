import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';

test('Renders display component correctly', () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId('display');
});

test('Renders controls component correctly', () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId('controls');
});