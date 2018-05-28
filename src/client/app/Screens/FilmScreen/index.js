import React from 'react';
import Footer from '../../components/Footer';
import ProposedFilmsContainer from './containers/ProposedFilmsContainer.jsx';
import FilmPageHeader from './components/FilmPageHeader.jsx';

import './style.css';

const FilmScreen = () =>
  (
    <div className="main-wrapper filmPage">
      <FilmPageHeader />
      <ProposedFilmsContainer />
      <Footer />
    </div>
  );


export default FilmScreen;
