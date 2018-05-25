import { SortTypes } from '../actions';

const sortType = (
  state =  'release_date',
  action,
) => {
  switch (action.type) {
    case 'SET_SORTING_TYPE':
      return action.payload.sortType;
    default:
      return state;
  }
};

export default sortType;
