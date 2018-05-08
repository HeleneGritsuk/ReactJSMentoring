import React from 'react';
import './style.css';

const Header = ({isFilmScreen, goToHomePage}) => (
  <header>
    <h1>netflixroulette</h1>
    {isFilmScreen ? <a className='homeBtn' href="#" onClick = {goToHomePage}>Search</a> : null }
  </header>

);

export default Header;
