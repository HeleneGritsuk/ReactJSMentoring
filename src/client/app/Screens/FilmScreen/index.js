import React from 'react';
import { render } from 'react-dom';
import Footer from '../../components/Footer';
import ProposedFilmsContainer from './containers/ProposedFilmsContainer.jsx';
import FilmPageHeader from './components/FilmPageHeader.jsx';

import './style.css';

class FilmScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="main-wrapper filmPage">
        <FilmPageHeader goToHomePage={this.props.goToHomePage} />
        <ProposedFilmsContainer/>
        <Footer />
      </div>
    );
  }
}

export default FilmScreen;
