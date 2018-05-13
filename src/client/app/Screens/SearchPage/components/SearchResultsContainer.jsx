import React from 'react';
import { render } from 'react-dom';
import Footer from '../../../components/Footer';
import SearchResultsHeader from './SearchResultsHeader.jsx';
import ResultsList from '../../../components/ResultsList';
import { filmsMockArray } from '../../../mocks';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsNumber: 7,
      films: filmsMockArray,
    };
  }
  render() {
    const { sortType, sortBtnClick } = this.props;
    return (
      <section className="searchResults">
        <div className="container">
          <SearchResultsHeader resultsNumber={this.state.resultsNumber} sortType={sortType} sortBtnClick={sortBtnClick} />
          <ResultsList films={this.state.films} />
        </div>
      </section>
    );
  }
}

export default SearchResultsContainer;
