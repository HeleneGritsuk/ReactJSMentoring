import { combineReducers } from "redux";
import searchFilter from "./searchFilter";
import sortType from "./sortType";
import films from "./films";
import filmInfo from "./filmInfo";
import searchQuery from "./searchQuery";
import searchFilmId from "./filmId";

const rootReducer = combineReducers({
  searchFilter,
  sortType,
  films,
  filmInfo,
  searchQuery,
  searchFilmId
});

export default rootReducer;
