import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import SearchPageHeader from "./components/SearchPageHeader.jsx";
import SearchResultsContainer from "./containers/SearchResultsContainer.jsx";
import "./style.css";

const SearchScreen = () => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader />
    <Switch>
      <Route exact path="/" component={SearchResultsContainer} />
      <Route path="/search/:searchQuery" component={SearchResultsContainer} />
    </Switch>
    <Footer />
  </div>
);

export default SearchScreen;
