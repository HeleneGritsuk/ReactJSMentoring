
const films = (state = [], action) => {
  switch (action.type) {
    case 'GET_FILMS_SUCCESS': {
      const list = action.payload.data.map(elem => ({
        name: elem.title,
        imgSrc: elem.poster_path,
        genre: elem.genres,
        year: elem.release_date,
        id: elem.id,
      }));
      return list;
    }
    default:
      return state;
  }
};


export default films;
