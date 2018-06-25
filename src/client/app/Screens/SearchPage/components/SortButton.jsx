import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSortBtn = styled.button`
  color: ${props => (props.active ? "#ce5a35" : "#484747")};
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: #484747;
  cursor: pointer;
`;

const SortButton = props => {
  const { sort, sortType, sortBtnClick, children } = props;
  return (
    <StyledSortBtn
      onClick={sortBtnClick.bind(null, sort)}
      active={sort === sortType && true}
    >
      {children}
    </StyledSortBtn>
  );
};

SortButton.propTypes = {
  sort: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  children: PropTypes.any
};
SortButton.defaultProps = {
  sortType: "release_date"
};
export default SortButton;
