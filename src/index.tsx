import React, { StrictMode } from 'react';
import { App } from './app/app';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
    document.getElementById('main') as HTMLElement
);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
