import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const StyledSearchBtn = styled.button`
  background: #757373;
  box-shadow: none;
  border: none;
  padding: 5px 15px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto;
  border-radius: 6px;
`;

const SearchBtn = withRouter(props => {
  const { history, setSearchQuery, inputRef } = props;

  return (
    <StyledSearchBtn
      onClick={() => {
        history.push(`/search/${inputRef.current.value}`);
        setSearchQuery(inputRef.current.value);
      }}
    >
      Search
    </StyledSearchBtn>
  );
});

export default SearchBtn;

SearchBtn.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
  history: PropTypes.object
};
