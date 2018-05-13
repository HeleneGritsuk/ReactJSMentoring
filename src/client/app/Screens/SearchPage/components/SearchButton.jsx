import React from 'react';

const SearchButton = ({
  filter, visibilityFilter, children, onClick,
}) => (
  <button onClick={onClick.bind(null, filter)} className={filter === visibilityFilter ? 'active searchForm__searchCriteriaBtns' : 'searchForm__searchCriteriaBtns'}>{children}</button>
);
export default SearchButton;
