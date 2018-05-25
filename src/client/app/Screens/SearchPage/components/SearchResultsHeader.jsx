import React from 'react';
import SortButton from './SortButton.jsx';
import { SortTypes } from '../../../redux/actions';

const SearchResultsHeader = ({ resultsNumber, sortBtnClick, sortType }) => (
  <div className="searchResults__header">

    {resultsNumber> 0  &&
      <div className="searchResults__header-content container">
        <div className="searchResults__foundNumber">{resultsNumber} movies found</div>
        <div className="searchResults__sorting">Sort by
          <SortButton sort='release_date' sortType={sortType} sortBtnClick={sortBtnClick}>release date</SortButton>
          <SortButton sort='vote_average' sortType={sortType} sortBtnClick={sortBtnClick}>rating</SortButton>
        </div>
      </div>

    }

  </div>

);

export default SearchResultsHeader;
