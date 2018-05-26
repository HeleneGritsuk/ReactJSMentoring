import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import App from './App.jsx';
import SearchScreen from './Screens/SearchPage';


render(
  <Router>
    <Provider store={store}>
      <App>
        <Route path="/" component={SearchScreen} />
      </App>
    </Provider>
  </Router>,
  document.getElementById('app'),
);
