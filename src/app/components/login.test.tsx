const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

// jest.mock('react-redux', () => {
//     const ActualReactRedux = jest.requireActual('react-redux');
//     return {
//         ...ActualReactRedux,
//         useDispatch: () => jest.fn(),
//         useSelector: jest.fn().mockImplementation(() => {
//             return {}; //any state;
//         }),
//     };
// });
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Login } from './login';
import { labelErrorColor } from './constants';

import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '../store-config';

describe('if user submit the form', () => {
    beforeEach(() => {
        render(
            <Provider store={configureStore()}>
                <Login />
            </Provider>
        );
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
