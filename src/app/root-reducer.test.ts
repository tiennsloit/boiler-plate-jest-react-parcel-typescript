import { UserInfo } from './components/interfaces';
import { AppAction, initialState, rootReducer } from './root-reducer';

describe('initialize action', () => {
    it('it should return inital state', () => {
        const action = {} as any;

        const result = rootReducer(undefined, action);
        expect(result).toBe(initialState);
    });
});

describe('when login action', () => {
    it('it should return user info state', () => {
        const loggedInUser: UserInfo = { email: 'abc@def', name: 'name1' };
        const action = { type: 'Login', payload: loggedInUser } as AppAction;

        const result = rootReducer(initialState, action);

        expect(result).toStrictEqual({ user: loggedInUser }); //use toStrictEqual for deep equality
    });
});
