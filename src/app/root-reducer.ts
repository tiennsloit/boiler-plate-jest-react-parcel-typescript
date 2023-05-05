import { UserInfo } from './components/interfaces';
export type AppState = {
    user?: UserInfo;
};

type ActionLogin = {
    type: 'Login';
    payload: UserInfo;
};

export const initialState = {};

export type AppAction = ActionLogin;
export const rootReducer = (
    state: AppState = initialState,
    action: AppAction
) => {
    switch (action.type) {
        case 'Login':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
