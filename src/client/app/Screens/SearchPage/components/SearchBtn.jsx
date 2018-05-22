import React from 'react';

const SearchBtn = ({
  getAllFilms, inputRef, searchFilter, sortType,
}) => (
  <button className="searchForm__searchBtn" onClick={() => { getAllFilms(inputRef.current.value, searchFilter, sortType); }}>Search</button>
);

export default SearchBtn;
