import React from 'react';
import { render } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
expect.extend({ toHaveClass })

import Display from './Display';

test('Displays if the gate is locked or unlocked', () => {
    const { getByText, rerender } = render(<Display locked />);
    getByText('Locked');
    rerender(<Display locked={false} />);
    getByText(/unlocked/i);
});

test('Displays if the gate is closed or open', () => {
    const { getByText, rerender } = render(<Display closed />);
    getByText(/closed/i);
    rerender(<Display closed={false} />);
    getByText(/open/i);
});

test('If locked or closed, the display is red', () => {
    const { getByText, rerender } = render(<Display locked />);
    expect(getByText('Locked')).toHaveClass('red-led');
    rerender(<Display closed />);
    expect(getByText(/closed/i)).toHaveClass('red-led');
});

test('If unlocked or open, the display is green', () => {
    const { getByText, rerender } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
    rerender(<Display closed={false} />);
    expect(getByText(/open/i)).toHaveClass('green-led');
});