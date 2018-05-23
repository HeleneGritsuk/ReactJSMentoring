import React from 'react';
import { render } from 'react-dom';
import Header from '../../../components/Header';
import FilmInfoContainer from '../containers/FilmInfoContainer.jsx';

const FilmPageHeader = ({goToHomePage}) => (
  <div className="pageHeader">
    <div className="container">
      <Header isFilmScreen goToHomePage={goToHomePage} />
      <FilmInfoContainer />
    </div>

  </div>
);

export default FilmPageHeader;
