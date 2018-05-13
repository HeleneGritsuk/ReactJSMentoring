import React from 'react';
import { render } from 'react-dom';
import Header from '../../../components/Header';
import { VisibilityFilters } from '../../../redux/actions';
import SearchButton from './SearchButton.jsx';
// import SearchForm from './SearchForm.jsx';

const SearchPageHeader = ({ visibilityFilter, onClick }) => (
  <div className="pageHeader">
    <div className="container">
      <Header />
      <div className="searchForm">
        <h3>Find your movie</h3>
        <input type="text" className="searchForm__input" />
        <div className="searchForm__footer">
          <div className="searchForm__searchCriteria">
            <span>Search by</span>
            <SearchButton onClick={onClick} filter={VisibilityFilters.SEARCH_BY_TITLE} visibilityFilter={visibilityFilter}>Title</SearchButton>
            <SearchButton onClick={onClick} filter={VisibilityFilters.SEARCH_BY_GENRE} visibilityFilter={visibilityFilter}>Genre</SearchButton>
          </div>
          <button className="searchForm__searchBtn">Search</button>
        </div>
      </div>
    </div>

  </div>
);


export default SearchPageHeader;
