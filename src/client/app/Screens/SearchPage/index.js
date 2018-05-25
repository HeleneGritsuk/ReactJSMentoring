import React from 'react';
import Footer from '../../components/Footer';
import SearchPageHeader from './components/SearchPageHeader.jsx';
import SearchResultsContainer from './containers/SearchResultsContainer.jsx';
import './style.css';


const SearchScreen = () => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader />
    <SearchResultsContainer />
    <Footer />
  </div>
);

export default SearchScreen;
