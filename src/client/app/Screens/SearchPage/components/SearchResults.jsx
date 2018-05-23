import React from 'react';
import SearchResultsHeader from './SearchResultsHeader.jsx';
import ResultsList from '../../../components/ResultsList';

const SearchResults = ({
  sortType, sortBtnClick, films, getFilmInfo,
}) => (

  <section className="searchResults">
    <SearchResultsHeader
      resultsNumber={films.length}
      sortType={sortType}
      sortBtnClick={sortBtnClick}
    />
    <ResultsList films={films} getFilmInfo={getFilmInfo} />
  </section>
);


export default SearchResults;
