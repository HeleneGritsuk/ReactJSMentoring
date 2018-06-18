import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: #ff8178;
`;

const StyledLink = styled(Link)`
  margin-left: auto;
  margin-left: auto;
  background: white;
  color: #ff8178;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Header = ({ isFilmScreen }) => (
  <StyledHeader>
    <StyledHeading>netflixroulette</StyledHeading>
    {isFilmScreen ? <StyledLink to="/">Search</StyledLink> : null}
  </StyledHeader>
);

Header.propTypes = {
  isFilmScreen: PropTypes.bool
};

export default Header;
