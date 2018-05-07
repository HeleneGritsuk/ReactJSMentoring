import React from 'react';

const SearchResultsHeader = ({resultsNumber, sortByReleaseDate, sortByRaiting}) => (
  <div className='searchResults__header'>
    <div className='searchResults__foundNumber'>{resultsNumber} movies found</div>
    <div className='searchResults__sorting'>Sort by
      <button onClick = {sortByReleaseDate}> release date</button>
      <button onClick = {sortByRaiting}> rating</button>
    </div>
  </div>

);

export default SearchResultsHeader;
