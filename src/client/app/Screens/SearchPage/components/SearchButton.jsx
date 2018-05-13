import React from 'react';

const SearchButton = ({
  filter, searchFilter, children, onClick,
}) => (
  <button onClick={onClick.bind(null, filter)} className={filter === searchFilter ? 'active searchForm__searchCriteriaBtns' : 'searchForm__searchCriteriaBtns'}>{children}</button>
);
export default SearchButton;
