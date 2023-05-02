// createStore is deprelated https://github.com/reduxjs/redux/pull/4336/
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root-reducer';

export const configureStore = () => {
    const middlewares: any[] = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, undefined, composedEnhancers);

    return store;
};
