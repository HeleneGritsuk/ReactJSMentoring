
const filmInfo = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FILM_INFO_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};


export default filmInfo;
