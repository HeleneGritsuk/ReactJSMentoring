import React from 'react';
import { render } from 'react-dom';
import Header  from '../../../components/Header';
import FilmInfo  from './FilmInfo.jsx';

class FilmInfoContainer extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return(
      <div className="pageHeader">
        <div className="container">
          <Header isFilmScreen = {true} goToHomePage = {this.props.goToHomePage}/>
          <FilmInfo filmInfo = {this.props.filmInfo}></FilmInfo>
        </div>

      </div>
    );
  }
}

export default FilmInfoContainer;
