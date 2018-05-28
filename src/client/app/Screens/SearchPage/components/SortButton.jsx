import React from 'react';
import PropTypes from 'prop-types';

const SortButton = props => {
  const {
    sort,
    sortType,
    sortBtnClick,
    children,
  } = props;

  return (
    <button
      onClick={sortBtnClick.bind(null, sort)}
      className={sort === sortType ? 'active searchResults__sortBtn' : 'searchResults__sortBtn'}
    >
      {children}
    </button>
  )
};

SortButton.propTypes = {
  sort: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default SortButton;
