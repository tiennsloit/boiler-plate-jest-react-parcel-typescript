import { UserInfo } from './components/interfaces';
type AppState = {
    user?: UserInfo;
};

type ActionLogin = {
    type: 'Login';
    payload: UserInfo;
};

export type AppAction = ActionLogin;
export const rootReducer = (state: AppState = {}, action: AppAction) => {
    switch (action.type) {
        case 'Login':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
