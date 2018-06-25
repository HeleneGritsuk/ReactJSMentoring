import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SortButton from "./SortButton.jsx";

const SearchResultsSorting = styled.div`
  margin-left: auto;
`;

const SearchResultsHeader = props => {
  const { resultsNumber, sortBtnClick, sortType } = props;
  return (
    <div className="searchResults__header">
      {resultsNumber > 0 && (
        <div className="searchResults__header-content container">
          <div className="searchResults__foundNumber">
            {resultsNumber} movies found
          </div>
          <SearchResultsSorting>
            Sort by
            <SortButton
              sort="release_date"
              sortType={sortType}
              sortBtnClick={sortBtnClick}
            >
              release date
            </SortButton>
            <SortButton
              sort="vote_average"
              sortType={sortType}
              sortBtnClick={sortBtnClick}
            >
              rating
            </SortButton>
          </SearchResultsSorting>
        </div>
      )}
    </div>
  );
};

SearchResultsHeader.propTypes = {
  resultsNumber: PropTypes.number.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired
};
SearchResultsHeader.defaultProps = {
  sortType: "release_date"
};
export default SearchResultsHeader;
