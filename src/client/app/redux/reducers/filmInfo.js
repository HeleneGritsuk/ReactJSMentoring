
const filmInfo = (state = [], action) => {
  switch (action.type) {
    case 'GET_FILM_INFO_SUCCESS':
      return {
        name: action.payload.title,
        imgSrc: action.payload.poster_path,
        genre: action.payload.genres,
        year: action.payload.release_date,
        id: action.payload.id,
        description: action.payload.overview,
        runtime: action.payload.runtime,
        relatedFilms: action.payload.relatedFilms.map(elem => ({
          name: elem.title,
          imgSrc: elem.poster_path,
          genre: elem.genres,
          year: elem.release_date,
          id: elem.id,
        })),
      };
    default:
      return state;
  }
};


export default filmInfo;
