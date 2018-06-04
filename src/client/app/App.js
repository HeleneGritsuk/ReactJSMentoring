import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './redux/store';
import SearchScreen from './Screens/SearchPage';
import FilmScreen from './Screens/FilmScreen';
import SearchResultsContainer from './Screens/SearchPage/containers/SearchResultsContainer.jsx';
import NotFoundScreen from './Screens/404';
import './style.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={SearchScreen} />
    <Route path="/search/:searchQuery" component={SearchScreen} />
    <Route path="/film/:id" component={FilmScreen} />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);


export default hot(module)(App);
