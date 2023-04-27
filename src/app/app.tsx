import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home-page';
import LoginPage from './login-page';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<div>No page</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
