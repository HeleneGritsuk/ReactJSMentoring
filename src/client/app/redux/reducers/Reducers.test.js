import filmInfoReducer from './filmInfo';
import filmsReducer from './films';
import searchFilterReducer from './searchFilter';
import sortReducer from './sortType';
// import * as types from '../actions/posts/getPostsReduxAction';
import expect from 'expect';
import { filmsMockArray, filmMock } from '../../mocks';


describe('filmInfo reducer', () => {
  it('should return the initial state', () => {
    expect(filmInfoReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_FILM_INFO_SUCCESS', () => {
    const successAction = {
      type: 'GET_FILM_INFO_SUCCESS',
      payload: filmMock,
    };
    expect(filmInfoReducer({}, successAction)).toEqual(successAction.payload);
  });
});

describe('films reducer', () => {
  it('should return the initial state', () => {
    expect(filmsReducer(undefined, {})).toEqual([]);
  });
  it('should handle GET_FILMS_SUCCESS', () => {
    const successAction = {
      type: 'GET_FILMS_SUCCESS',
      payload: { data: filmsMockArray },
    };
    expect(filmsReducer({}, successAction)).toEqual(successAction.payload.data);
  });
});

describe('searchFilter reducer', () => {
  it('should return the initial state', () => {
    expect(searchFilterReducer(undefined, {})).toEqual('title');
  });
  it('should handle SET_SEARCH_FILTER', () => {
    const successAction = {
      type: 'SET_SEARCH_FILTER',
      payload: { filter: 'genres' },
    };
    expect(searchFilterReducer({}, successAction)).toEqual(successAction.payload.filter);
  });
});


describe('Sort reducer', () => {
  it('should return the initial state', () => {
    expect(sortReducer(undefined, {})).toEqual('release_date');
  });
  it('should handle SET_SORTING_TYPE', () => {
    const successAction = {
      type: 'SET_SORTING_TYPE',
      payload: { sortType: 'vote_average' },
    };
    expect(sortReducer({}, successAction)).toEqual(successAction.payload.sortType);
  });
});
