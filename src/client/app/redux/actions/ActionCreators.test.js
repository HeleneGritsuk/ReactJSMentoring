import {
  setSearchFilter,
  setSortingType,
  beginGetFilms,
  beginGetFilmInfo,
  getFilmsSuccess,
  getFilmInfoSuccess,
  getFilmsError,
  getFilmInfoError
} from "./index";
import { filmsMockArray, filmMock } from "../../mocks";

describe(">>>A C T I O N --- Test ActionsCreators", () => {
  it("+++ actionCreator setSearchFilter", () => {
    const filterValue = "genres";
    const search = setSearchFilter(filterValue);
    expect(search).toEqual({
      type: "SET_SEARCH_FILTER",
      payload: { filter: filterValue }
    });
  });
  it("+++ actionCreator setSortingType", () => {
    const sortValue = "release_date";
    const setSortType = setSortingType(sortValue);
    expect(setSortType).toEqual({
      type: "SET_SORTING_TYPE",
      payload: { sortType: sortValue }
    });
  });

  it("+++ actionCreator beginGetFilms", () => {
    const startGetFilms = beginGetFilms();
    expect(startGetFilms).toEqual({ type: "BEGIN_GET_FILMS" });
  });
  it("+++ actionCreator beginGetFilmInfo", () => {
    const startGetFilmInfo = beginGetFilmInfo();
    expect(startGetFilmInfo).toEqual({ type: "BEGIN_GET_FILM_INFO" });
  });

  it("+++ actionCreator getFilmsSuccess", () => {
    const getMoviesSuccess = getFilmsSuccess(filmsMockArray);
    expect(getMoviesSuccess).toEqual({
      type: "GET_FILMS_SUCCESS",
      payload: filmsMockArray
    });
  });
  it("+++ actionCreator getFilmInfoSuccess", () => {
    const getMovieSuccess = getFilmInfoSuccess(filmMock);
    expect(getMovieSuccess).toEqual({
      type: "GET_FILM_INFO_SUCCESS",
      payload: filmMock
    });
  });

  it("+++ actionCreator getFilmsError", () => {
    const filmsError = getFilmsError();
    expect(filmsError).toEqual({ type: "GET_FILMS_ERROR" });
  });

  it("+++ actionCreator getFilmInfoError", () => {
    const filmError = getFilmInfoError();
    expect(filmError).toEqual({ type: "GET_FILM_INFO_ERROR" });
  });
});
