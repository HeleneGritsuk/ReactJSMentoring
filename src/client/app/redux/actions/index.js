
export const setSearchFilter = filter => ({
  type: 'SET_SEARCH_FILTER',
  payload: {
    filter,
  },
});

export const SearchFilters = {
  SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
  SEARCH_BY_GENRE: 'SEARCH_BY_GENRE',
};
