import React from 'react';
import { render } from 'react-dom';
import Footer  from '../Footer/Footer.jsx';
import ProposedFilmsContainer from './ProposedFilmsContainer.jsx';
import FilmInfoContainer from './FilmInfoContainer.jsx';

class FilmScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div className='main-wrapper'>
        <FilmInfoContainer goToHomePage = {this.props.goToHomePage}/>
        <ProposedFilmsContainer/>
        <Footer/>
      </div>
    );
  }
}

export default FilmScreen;
