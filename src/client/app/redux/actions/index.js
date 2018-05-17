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

const getFilmsSuccess = data => ({
  type: 'GET_FILMS_SUCCESS',
  payload: data,
});

const getFilmsError = () => ({
  type: 'GET_FILMS_ERROR',
});

const makeUserRequest = (method, searchTerm, api = 'http://react-cdp-api.herokuapp.com/movies') =>
// returns a Promise
  axios({
    method,
    url: `${api}?search=${searchTerm}&searchBy=title&sortBy=release_date&sortOrder=desc`,
  });


export const getAllFilms = searchTerm => (dispatch) => {
  dispatch(beginGetFilms());

  return makeUserRequest('get', searchTerm)
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
