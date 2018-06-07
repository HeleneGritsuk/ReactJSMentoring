import axios from "axios";

export const setSearchFilter = filter => ({
  type: "SET_SEARCH_FILTER",
  payload: {
    filter
  }
});

export const setSortingType = sortType => ({
  type: "SET_SORTING_TYPE",
  payload: {
    sortType
  }
});

export const SearchFilters = {
  SEARCH_BY_TITLE: "SEARCH_BY_TITLE",
  SEARCH_BY_GENRE: "SEARCH_BY_GENRE"
};

export const SortTypes = {
  SORT_BY_RELEASE: "SORT_BY_RELEASE",
  SORT_BY_RATING: "SORT_BY_RATING"
};

export const beginGetFilms = () => ({
  type: "BEGIN_GET_FILMS"
});

export const beginGetFilmInfo = () => ({
  type: "BEGIN_GET_FILM_INFO"
});

export const getFilmsSuccess = data => ({
  type: "GET_FILMS_SUCCESS",
  payload: data
});
export const getFilmInfoSuccess = data => ({
  type: "GET_FILM_INFO_SUCCESS",
  payload: data
});

export const getFilmsError = () => ({
  type: "GET_FILMS_ERROR"
});
export const getFilmInfoError = () => ({
  type: "GET_FILM_INFO_ERROR"
});
export const setSearchQuery = searchQuery => ({
  type: "SET_SEARCH_QUERY",
  payload: searchQuery
});
export const setSearchFilmId = (filmId, genres) => ({
  type: "SET_SEARCH_FILM_ID",
  payload: {
    filmId,
    genres
  }
});
const makeSearchRequest = (
  method,
  searchTerm,
  searchFilter = "genres",
  sortBy = "release_date",
  api = "http://react-cdp-api.herokuapp.com/movies"
) =>
  // returns a Promise
  axios({
    method,
    url: `${api}?search=${searchTerm}&searchBy=${searchFilter}&sortBy=${sortBy}&sortOrder=desc`
  });

const makeFilmRequest = (
  method,
  id,
  api = "http://react-cdp-api.herokuapp.com/movies/"
) =>
  // returns a Promise
  axios({
    method,
    url: `${api}${id}`
  });

export const getAllFilms = (searchTerm, searchFilter, sortBy) => dispatch => {
  dispatch(beginGetFilms());

  return makeSearchRequest("get", searchTerm, searchFilter, sortBy)
    .then(response => {
      if (response.status == 200) {
        dispatch(getFilmsSuccess(response.data));
      } else {
        dispatch(getFilmsError());
        const sendBlogMessage = response.data.message;
        return sendBlogMessage;
      }
    })
    .catch(response => {
      if (response instanceof Error) {
        console.log("Error", response.message);
      }
    });
};

export const getFilmInfo = (id, genres) => dispatch => {
  dispatch(beginGetFilmInfo());

  const filmInfo = makeFilmRequest("get", id)
    .then(response => {
      if (response.status == 200) {
        return response.data;
        // dispatch(getFilmInfoSuccess(response.data));
      }
      dispatch(getFilmInfoError());
      const sendBlogMessage = response.data.message;
      return sendBlogMessage;
    })
    .catch(response => {
      if (response instanceof Error) {
        console.log("Error", response.message);
      }
    });

  const films = makeSearchRequest("get", genres[0])
    .then(response => {
      if (response.status == 200) {
        return response.data;
      }
      dispatch(getFilmsError());
      const sendBlogMessage = response.data.message;
      return sendBlogMessage;
    })
    .catch(response => {
      if (response instanceof Error) {
        console.log("Error", response.message);
      }
    });
  Promise.all([filmInfo, films]).then(info => {
    const allInfo = Object.assign(
      {},
      { data: info[0] },
      { relatedFilms: info[1].data }
    );
    dispatch(getFilmInfoSuccess(allInfo));
  });
};
