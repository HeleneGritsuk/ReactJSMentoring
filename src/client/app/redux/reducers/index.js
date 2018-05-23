import { combineReducers } from 'redux';
import searchFilter from './searchFilter';
import sortType from './sortType';
import films from './films';
import filmInfo from './filmInfo';

const rootReducer = combineReducers({
  searchFilter,
  sortType,
  films,
  filmInfo
});

export default rootReducer;
