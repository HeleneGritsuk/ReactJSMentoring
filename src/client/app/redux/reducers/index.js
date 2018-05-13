import { combineReducers } from 'redux';
import searchFilter from './searchFilter';
import sortType from './sortType';

const rootReducer = combineReducers({
  searchFilter,
  sortType,
});

export default rootReducer;
