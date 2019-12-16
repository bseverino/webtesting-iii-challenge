import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

test('Displays the correct actions based on whether the gate is locked or closed', () => {
    const { findByText, rerender } = render(<Controls locked closed />);
    findByText(/unlock/i);
    findByText(/open/i);
    rerender(<Controls locked={false} closed />);
    findByText(/lock/i);
    findByText(/open/i);
    rerender(<Controls locked={false} closed={false} />);
    findByText(/lock/i);
    findByText(/close/i);
});

test('Unlock gate button unlocks the gate and changes the button to lock', () => {
    const { getByText, findByText } = render(<Controls locked />);
    const button = getByText(/unlock/i);
    fireEvent.click(button);
    findByText(/lock/i);
});

test('Open gate button opens the gate and changes the button to close', () => {
    const { getByText, findByText } = render(<Controls locked={false} closed />);
    const button = getByText(/open/i);
    fireEvent.click(button);
    findByText(/close/i);
});