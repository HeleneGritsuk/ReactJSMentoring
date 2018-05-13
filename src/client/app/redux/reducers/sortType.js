import { SortTypes } from '../actions';

const sortType = (
  state =  SortTypes.SORT_BY_RELEASE,
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
