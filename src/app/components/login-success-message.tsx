import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../root-reducer';

export const LoginSuccessMessage = () => {
    const useState = useSelector((state: AppState) => state.user);
    return useState ? <div role='loginSuccess'>Login success!</div> : <></>;
};
