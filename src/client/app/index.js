import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { hydrate } from 'react-dom';
import { render } from 'react-dom';
import App from './App';

const store = configureStore(window.PRELOADED_STATE);
const root = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(root, document.getElementById('app'));
