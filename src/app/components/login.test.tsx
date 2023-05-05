const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

// in case we don't need to test the result from redux store
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
import { StoreProvider } from './store-provider';

beforeEach(() => {
    render(
        <StoreProvider>
            <Login />
        </StoreProvider>
    );
});

describe('if user submit the form', () => {
    beforeEach(() => {
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

describe('if user input valid form data', () => {
    describe('and submit the form', () => {
        it('it should show success message', async () => {
            const emailInput = screen.getByRole('email');
            const passwordInput = screen.getByRole('password');

            fireEvent.change(emailInput, {
                target: { value: 'tiennsloit@gmail.com' },
            });
            fireEvent.change(passwordInput, {
                target: { value: 'dummypassword' },
            });

            const submitButon = screen.getByText('Sign in');
            fireEvent.click(submitButon);

            await screen.findByText(/login success/i);
            expect(screen.getByText(/login success/i)).toBeDefined();
        });
    });
});
