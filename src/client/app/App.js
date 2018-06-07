import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchScreen from "./Screens/SearchPage";
import FilmScreen from "./Screens/FilmScreen";
import NotFoundScreen from "./Screens/404";
import "./style.css";

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={SearchScreen} />
        <Route path="/search/:searchQuery" component={SearchScreen} />
        <Route path="/film/:id" component={FilmScreen} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(App);
