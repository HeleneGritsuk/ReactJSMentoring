import axios from 'axios';

export const setSearchFilter = filter => ({
  type: 'SET_SEARCH_FILTER',
  payload: {
    filter,
  },
});

export const setSortingType = sortType => ({
  type: 'SET_SORTING_TYPE',
  payload: {
    sortType,
  },
});


export const SearchFilters = {
  SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
  SEARCH_BY_GENRE: 'SEARCH_BY_GENRE',
};

export const SortTypes = {
  SORT_BY_RELEASE: 'SORT_BY_RELEASE',
  SORT_BY_RATING: 'SORT_BY_RATING',
};


const beginGetFilms = () => ({
  type: 'BEGIN_GET_FILMS',
});

const beginGetFilmInfo = () => ({
  type: 'BEGIN_GET_FILM_INFO',
});

const getFilmsSuccess = data => ({
  type: 'GET_FILMS_SUCCESS',
  payload: data,
});
const getFilmInfoSuccess = data => ({
  type: 'GET_FILM_INFO_SUCCESS',
  payload: data,
});


const getFilmsError = () => ({
  type: 'GET_FILMS_ERROR',
});
const getFilmInfoError = () => ({
  type: 'GET_FILM_INFO_ERROR',
});

const makeSearchRequest = (method, searchTerm, searchFilter = 'genres', sortBy = 'release_date', api = 'http://react-cdp-api.herokuapp.com/movies') =>
// returns a Promise
  axios({
    method,
    url: `${api}?search=${searchTerm}&searchBy=${searchFilter}&sortBy=${sortBy}&sortOrder=desc`,
  });

const makeFilmRequest = (method, id, api = 'http://react-cdp-api.herokuapp.com/movies/') =>
  // returns a Promise
  axios({
    method,
    url: `${api}${id}`,
  });

export const getAllFilms = (searchTerm, searchFilter, sortBy) => (dispatch) => {
  dispatch(beginGetFilms());

  return makeSearchRequest('get', searchTerm, searchFilter, sortBy)
    .then((response) => {
      if (response.status == 200) {
        dispatch(getFilmsSuccess(response.data));
      } else {
        dispatch(getFilmsError());
        const sendBlogMessage = response.data.message;
        return sendBlogMessage;
      }
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      }
    });
};

export const getFilmInfo = (id, genre) => (dispatch) => {
  dispatch(beginGetFilmInfo());

  const filmInfo = makeFilmRequest('get', id)
    .then((response) => {
      if (response.status == 200) {
        return response.data;
        // dispatch(getFilmInfoSuccess(response.data));
      }
      dispatch(getFilmInfoError());
      const sendBlogMessage = response.data.message;
      return sendBlogMessage;
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      }
    });

  const films = makeSearchRequest('get', genre[0])
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
      dispatch(getFilmsError());
      const sendBlogMessage = response.data.message;
      return sendBlogMessage;
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      }
    });
  Promise.all([filmInfo, films]).then((info) => {
    const allInfo = Object.assign({}, info[0], { relatedFilms: info[1].data });
    dispatch(getFilmInfoSuccess(allInfo));
  });

};
