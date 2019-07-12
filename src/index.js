// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import cfg from './cfg';

import App from './app';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

if (cfg.domElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    cfg.domElement,
  );
}
