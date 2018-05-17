import { combineReducers } from 'redux';
import searchFilter from './searchFilter';
import sortType from './sortType';
import films from './films';

const rootReducer = combineReducers({
  searchFilter,
  sortType,
  films,
});

export default rootReducer;
