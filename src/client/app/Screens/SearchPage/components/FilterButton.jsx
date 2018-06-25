import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchCriteriaBtn = styled.button`
  background: ${props => (props.active ? "#ce5a35" : "#757373")};
  box-shadow: none;
  border: none;
  padding: 5px 15px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  margin: 5px 10px;
  cursor: pointer;
  border-radius: 6px;
`;

const FilterButton = props => {
  const { filter, searchFilter, children, setSearchFilter } = props;
  return (
    <StyledSearchCriteriaBtn
      onClick={setSearchFilter(filter)}
      active={filter === searchFilter && true}
    >
      {children}
    </StyledSearchCriteriaBtn>
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
