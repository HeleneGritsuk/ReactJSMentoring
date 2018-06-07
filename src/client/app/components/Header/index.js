import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ isFilmScreen }) => (
  <header>
    <h1>netflixroulette</h1>
    { isFilmScreen ?
      (<Link to="/" className="homeBtn"> Search </Link> ) : null }
  </header>
);

export default Header;
