import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

  return store;
};
