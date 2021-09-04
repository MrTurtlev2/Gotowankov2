import React from 'react';
import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import rootReducer from '.';

const middlewares = [promise];

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(...middlewares));

// eslint-disable-next-line react/display-name
export default ({ children }) => <Provider store={createStore()}>{children}</Provider>;