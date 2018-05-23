
const films = (state = [], action) => {
  switch (action.type) {
    case 'GET_FILMS_SUCCESS': {
      return action.payload.data;
    }
    default:
      return state;
  }
};


export default films;
