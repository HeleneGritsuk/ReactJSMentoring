import React from 'react';
import { render } from 'react-dom';
import ProposedListHeader  from './ProposedListHeader.jsx';
import ResultsList  from '../../../components/ResultsList';

class ProposedFilmsContainer extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    const {genre, films} = this.props;
    return(
      <section className="searchResults">
        <div className="container">
          <ProposedListHeader genre={genre}/>
          <ResultsList films={films}/>
        </div>
      </section>
    );
  }
}

export default ProposedFilmsContainer;
