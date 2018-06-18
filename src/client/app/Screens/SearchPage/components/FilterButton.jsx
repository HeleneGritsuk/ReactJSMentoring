import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// const SearchCriteriaBtns = styled.button`
//   background: #757373;
//   box-shadow: none;
//   border: none;
//   padding: 5px 15px;
//   text-transform: uppercase;
//   color: white;
//   font-weight: bold;
//   margin: 5px 10px;
//   cursor: pointer;
//   border-radius: 6px;
// `;


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
FilterButton.defaultProps = {
  searchFilter: "title"
};
export default FilterButton;
