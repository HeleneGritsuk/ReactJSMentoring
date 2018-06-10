import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ isFilmScreen }) => (
  <header>
    <h1>netflixroulette</h1>
    {isFilmScreen ? (
      <Link to="/" className="homeBtn">
        {" "}
        Search{" "}
      </Link>
    ) : null}
  </header>
);

Header.propTypes = {
  isFilmScreen: PropTypes.bool
};

export default Header;
