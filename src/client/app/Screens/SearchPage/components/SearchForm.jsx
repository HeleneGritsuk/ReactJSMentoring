import React from 'react';

const SearchForm = ({sortByTitle}) => (
  <div className ="searchForm">
    <h3>Find your movie</h3>
    <input type="text" className='searchForm__input'/>
    <div className= "searchForm__footer">
      <div className ='searchForm__searchCriteria'>
        <span>Search by</span>
        <button className = {sortByTitle ? 'active searchForm__searchCriteriaBtns' : 'searchForm__searchCriteriaBtns'}>Title</button>
        <button className = 'searchForm__searchCriteriaBtns'>Genre</button>
      </div>
      <button className ='searchForm__searchBtn'>Search</button>
    </div>
  </div>

);

export default SearchForm;
