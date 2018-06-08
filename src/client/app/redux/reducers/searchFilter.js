import { SearchFilters } from "../actions";

const searchFilter = (state = "title", action) => {
  switch (action.type) {
    case "SET_SEARCH_FILTER":
      return action.payload.filter;
    default:
      return state;
  }
};

export default searchFilter;
