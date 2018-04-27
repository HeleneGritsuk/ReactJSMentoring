import React from 'react';

const SearchForm = ({}) => (
  <div className ="searchForm">
    <h3>Find your movie</h3>
    <input type="text"/>
    <div className= "searchForm__footer">
      <div className ='searchForm__searchCriteria'>
        <span>Search by</span>
        <button>Title</button>
        <button>Genre</button>
      </div>
      <button className ='searchForm__searchBtn'>Search</button>
    </div>
  </div>

);

export default SearchForm;
