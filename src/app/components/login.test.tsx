import React from 'react';
import {
    fireEvent,
    getByText,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { Login } from './login';
import { labelErrorColor } from './constants';
import { setupServer } from 'msw/node';
import { BrowserRouter, Router } from 'react-router-dom';
import { rest } from 'msw';
import { HomePage } from '../home-page';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { App } from '../app';

describe('if user submit the form', () => {
    beforeEach(() => {
        render(<Login />);
        const submitButon = screen.getByText('Sign in');
        fireEvent.click(submitButon);
    });

    describe('and login password is not valid', () => {
        it('it should update the password label text with red color', () => {
            const labelPasswordElement = screen.getByText('Password');
            expect(labelPasswordElement.className).toContain(labelErrorColor);
        });
    });
    describe('and login username is not valid', () => {
        it('it should update the email label text with red color', () => {
            const labelEmailElement = screen.getByText('Email address');
            expect(labelEmailElement.className).toContain(labelErrorColor);
        });
    });
});
