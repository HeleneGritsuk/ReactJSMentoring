import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './redux/store';
import { hydrate } from 'react-dom';
import { render } from 'react-dom';
import App from './App';

const root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

);

hydrate(root, document.getElementById('app'));
