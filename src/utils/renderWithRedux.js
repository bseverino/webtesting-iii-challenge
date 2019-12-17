import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { initialState, reducer } from '../store/reducers';

export const renderWithRedux = (
    ui,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    const rendered = render(
        <Provider store={store}>{ui}</Provider>,
        ({ initialState, store = createStore(reducer, initialState) } = {})
    )
    return {
        ...rendered,
        rerender: (ui, options) => renderWithRedux(ui, { container: rendered.container, ...options }),
        store
    }
};