import React from 'react';
import { render } from '@testing-library/react';

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