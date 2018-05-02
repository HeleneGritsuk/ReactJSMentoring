import React from 'react';
import { render } from 'react-dom';
import Footer  from '../Footer/Footer.jsx';
import ProposedListHeader  from './ProposedListHeader.jsx';
import ResultsList  from '../ResultsList/ResultsList.jsx';

class ProposedFilmsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'oscar-winning movies',
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
      <section className="searchResults">
        <div className="container">
          <ProposedListHeader genre={this.state.genre}/>
          <ResultsList films={this.state.films}/>
        </div>
      </section>
    );
  }
}

export default ProposedFilmsContainer;
