
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter,
  },
});

export const VisibilityFilters = {
  SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
  SEARCH_BY_GENRE: 'SEARCH_BY_GENRE',
};
