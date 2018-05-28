import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './redux/store';
import SearchScreen from './Screens/SearchPage';
import SearchResultsContainer from './Screens/SearchPage/containers/SearchResultsContainer.jsx';
import NotFoundScreen from './Screens/404';
import './style.css';


render(
  (
    <Provider store={store}>
      <Router>
        <Switch>
              <Route exact path="/" component={SearchScreen} />
              <Route path="/search/:searchQuery" component={SearchScreen} />
              <Route path="*" component={NotFoundScreen} />
        </Switch>
      </Router>
    </Provider>
  ), document.getElementById('app'),
);
