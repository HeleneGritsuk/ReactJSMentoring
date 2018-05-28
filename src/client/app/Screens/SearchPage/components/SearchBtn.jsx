import React from 'react';
import { withRouter } from 'react-router'

const SearchBtn = withRouter(({
  history, setSearchQuery, inputRef
}) => (
  <button className="searchForm__searchBtn" onClick={() => { history.push(`/search/${inputRef.current.value}`); setSearchQuery(inputRef.current.value); }}>Search</button>
));

export default SearchBtn;
