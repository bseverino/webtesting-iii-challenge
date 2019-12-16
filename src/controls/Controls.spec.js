import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('When the gate is locked and closed, unlock gate and open gate are displayed', () => {
    const { getByText } = render(<Controls locked closed />);
    getByText(/unlock gate/i);
    getByText(/open gate/i);
});

test('Unlock gate button unlocks the gate and changes the button to lock', () => {
    const { getByTestId, getByText } = render(<Controls locked />);
    const button = getByTestId('toggleLockedBtn');
    fireEvent.click(button);
    getByText(/lock gate/i);
});