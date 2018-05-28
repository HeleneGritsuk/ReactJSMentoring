
const films = (state = {list:[], searchQuery: ''}, action) => {
  switch (action.type) {
    case 'GET_FILMS_SUCCESS': {
      return {
        list: action.payload.data,
        searchQuery: action.payload.searchTerm,
      }
    }
    default:
      return state;
  }
};


export default films;
