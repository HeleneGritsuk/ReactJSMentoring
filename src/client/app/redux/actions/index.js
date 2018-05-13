
export const setSearchFilter = filter => ({
  type: 'SET_SEARCH_FILTER',
  payload: {
    filter
  },
});

export const setSortingType = sortType => ({
  type: 'SET_SORTING_TYPE',
  payload: {
    sortType
  },
});


export const SearchFilters = {
  SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
  SEARCH_BY_GENRE: 'SEARCH_BY_GENRE',
};

export const SortTypes = {
  SORT_BY_RELEASE: 'SORT_BY_RELEASE',
  SORT_BY_RATING: 'SORT_BY_RATING',
};
