import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsHeader from './SearchResultsHeader.jsx';
import ResultsList from '../../../components/ResultsList';

const SearchResults = props => {
  const {
    sortType,
    sortBtnClick,
    films,
    getFilmInfo,
  } = props;

  return (
    <section className="searchResults">
      <SearchResultsHeader
        resultsNumber={films.length}
        sortType={sortType}
        sortBtnClick={sortBtnClick}
      />
      <ResultsList films={films} getFilmInfo={getFilmInfo}/>
    </section>
  );
};

SearchResults.propTypes = {
  sortType: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  getFilmInfo: PropTypes.func.isRequired,
};

export default SearchResults;
