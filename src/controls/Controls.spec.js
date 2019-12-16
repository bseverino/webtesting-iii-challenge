import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeDisabled } from '@testing-library/jest-dom';
expect.extend({ toBeDisabled })

import Controls from './Controls';

test('Displays the correct actions based on whether the gate is locked or closed', () => {
    const { getByText, rerender } = render(<Controls locked closed />);
    getByText(/unlock/i);
    getByText(/open/i);
    rerender(<Controls locked={false} closed />);
    getByText(/lock gate/i);
    getByText(/open/i);
    rerender(<Controls locked={false} closed={false} />);
    getByText(/lock gate/i);
    getByText(/close/i);
});

test('Unlock gate button unlocks the gate and changes the button to lock', () => {
    const { getByText, findByText } = render(<Controls locked />);
    const button = getByText(/unlock/i);
    fireEvent.click(button);
    findByText(/lock gate/i);
});

test('Open gate button opens the gate and changes the button to close', () => {
    const { getByText, findByText } = render(<Controls locked={false} closed />);
    const button = getByText(/open/i);
    fireEvent.click(button);
    findByText(/close/i);
});

test('Lock gate is disabled if the gate is open', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    const button = getByText(/lock gate/i);
    expect(button).toBeDisabled();
});

test('Open gate does not work if the gate is locked', () => {
    const { getByText } = render(<Controls locked closed />);
    const button = getByText(/open/i);
    expect(button).toBeDisabled();
});