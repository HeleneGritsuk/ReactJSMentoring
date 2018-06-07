import React from "react";
import PropTypes from "prop-types";

const FilterButton = props => {
  const { filter, searchFilter, children, setSearchFilter } = props;

  return (
    <button
      onClick={setSearchFilter(filter)}
      className={
        filter === searchFilter
          ? "active searchForm__searchCriteriaBtns"
          : "searchForm__searchCriteriaBtns"
      }
    >
      {children}
    </button>
  );
};

FilterButton.propTypes = {
  setSearchFilter: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default FilterButton;
