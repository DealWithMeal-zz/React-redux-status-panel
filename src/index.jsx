// react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// hot reload for development
import { AppContainer } from 'react-hot-loader';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import './style.scss';

import App from './App';

const store = createStore(rootReducer)
const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>
    </Provider>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
