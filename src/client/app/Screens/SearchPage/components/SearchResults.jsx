import React from "react";
import PropTypes from "prop-types";
import SearchResultsHeader from "./SearchResultsHeader.jsx";
import ResultsList from "../../../components/ResultsList";

class SearchResults extends React.Component {
  componentDidMount() {
    const { sortType, searchFilter, getAllFilms } = this.props;
    getAllFilms(this.props.match.params.searchQuery, searchFilter, sortType);
  }

  componentDidUpdate(prevProps) {
    const { sortType, searchFilter, getAllFilms } = prevProps;
    if (this.props.searchQuery !== prevProps.searchQuery) {
      getAllFilms(this.props.match.params.searchQuery, searchFilter, sortType);
    }
  }

  render() {
    const { sortType, sortBtnClick, films, setSearchFilmId } = this.props;
    return (
      <section className="searchResults">
        <SearchResultsHeader
          resultsNumber={films.length}
          sortType={sortType}
          sortBtnClick={sortBtnClick}
        />
        <ResultsList films={films} setSearchFilmId={setSearchFilmId} />
      </section>
    );
  }
}

SearchResults.propTypes = {
  sortType: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchFilmId: PropTypes.func.isRequired,
  match: PropTypes.object,
  params: PropTypes.object,
  getAllFilms: PropTypes.func.isRequired
};

SearchResults.defaultProps = {
  films: [],
  searchFilter: "title",
  sortType: "release_date"
};
export default SearchResults;
