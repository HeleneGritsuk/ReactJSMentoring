const searchFilmId = (state = { id: "", genres: "" }, action) => {
  switch (action.type) {
    case "SET_SEARCH_FILM_ID":
      return {
        id: action.payload.filmId,
        genres: action.payload.genres
      };
    default:
      return state;
  }
};

export default searchFilmId;
