import React, { StrictMode } from 'react';
import { App } from './app/app';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('main') as HTMLElement
);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
