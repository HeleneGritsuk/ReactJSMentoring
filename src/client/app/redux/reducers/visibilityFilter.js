import { VisibilityFilters } from '../actions';

const visibilityFilter = (
  state =  VisibilityFilters.SEARCH_BY_TITLE,
  action,
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
