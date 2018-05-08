import React from 'react';
import { render } from 'react-dom';
import Footer  from '../../components/Footer';
import ProposedFilmsContainer from './components/ProposedFilmsContainer.jsx';
import FilmInfoContainer from './components/FilmInfoContainer.jsx';
import { filmsMockArray } from '../../mocks';
import './style.css';

class FilmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'oscar-winning movies',
      filmImg: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
      filmTitle: 'Kill Bill',
      genre: 'oscar-winning movies',
      year: '1994',
      duration: 54,
      description: 'Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza.',
      films: filmsMockArray
    }
  }

  render () {
    return(
      <div className='main-wrapper filmPage'>
        <FilmInfoContainer goToHomePage = {this.props.goToHomePage} filmInfo = {this.state}/>
        <ProposedFilmsContainer genre = {this.state.genre} films={this.state.films}/>
        <Footer/>
      </div>
    );
  }
}

export default FilmScreen;
