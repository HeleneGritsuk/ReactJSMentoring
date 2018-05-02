import React from 'react';
import { render } from 'react-dom';
import Header  from '../Header/Header.jsx';
import FilmInfo  from './FilmInfo.jsx';

class FilmInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmImg: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
      filmTitle: 'Kill Bill',
      genre: 'oscar-winning movies',
      year: '1994',
      duration: 54,
      description: 'Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza.',
      films: [
        {
          name: 'Kill Bill',
          imgSrc: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
          genre: 'drama',
          year: 2014,
          id: 1
        },
        {
          name: 'Kill Bill2',
          imgSrc: 'http://www.imfdb.org/images/thumb/6/65/Killbillposter.jpg/300px-Killbillposter.jpg',
          genre: 'adventure',
          year: 2017,
          id: 2
        }
      ]
    }
  }
  render () {
    return(
      <div className="search">
        <div className="container">
          <Header isFilmScreen = {true} goToHomePage = {this.props.goToHomePage}/>
          <FilmInfo filmInfo = {this.state}></FilmInfo>
        </div>

      </div>
    );
  }
}

export default FilmInfoContainer;
