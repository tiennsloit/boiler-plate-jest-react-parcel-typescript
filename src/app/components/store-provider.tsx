import React from 'react';
import { configureStore } from '../store-config';
import { Provider } from 'react-redux';

type Props = {
    children: React.ReactNode;
};

export const StoreProvider = (props: Props) => {
    return <Provider store={configureStore()}>{props.children}</Provider>;
};
