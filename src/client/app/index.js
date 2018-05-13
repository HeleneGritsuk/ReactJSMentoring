import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  store from './redux/configureStore';
import App from './App.jsx';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
