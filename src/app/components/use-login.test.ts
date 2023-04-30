import { act, renderHook } from '@testing-library/react';
import { useLogin } from './use-login';

describe('when logging in', () => {
    describe('and the login is success', () => {
        it('it should return user info', async () => {
            const mockPromise = {
                email: 'tiennsloit@gmail.com',
                name: 'Some Name',
            };
            const expectedUserResult = {
                email: 'tiennsloit@gmail.com',
                name: 'Some Name',
            };
            const fetcherPromise = Promise.resolve(mockPromise);
            const result = renderHook(() => useLogin(() => fetcherPromise));
            await act(() => fetcherPromise);
            const [userInfo] = result.result.current;
            expect(userInfo).toStrictEqual(expectedUserResult);
        });
    });

    describe('and the login failed', () => {
        it('it should return error', async () => {
            //not working because of https://stackoverflow.com/questions/67611213/how-to-test-a-throw-in-an-unhandled-promise-rejection
            const fetchError = Promise.reject('');
            const result = renderHook(() => useLogin(() => fetchError));
            await act(() => fetchError);
            const [userInfo, error] = result.result.current;
            expect(userInfo).toStrictEqual({});
            expect(error).not.toBe(undefined);
        });
    });
});
