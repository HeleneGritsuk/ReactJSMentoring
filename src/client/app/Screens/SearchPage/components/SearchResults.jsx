import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsHeader from './SearchResultsHeader.jsx';
import ResultsList from '../../../components/ResultsList';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { sortType, searchFilter, getAllFilms } = this.props;
    getAllFilms(this.props.match.params.searchQuery, searchFilter, sortType);
  }

  componentWillUpdate(nextProps, nextState) {
    const { sortType, searchFilter, getAllFilms } = this.props;
    if (nextProps.searchQuery !== this.props.searchQuery) {
      getAllFilms(nextProps.match.params.searchQuery, searchFilter, sortType);
    }
  }

  render() {
    const {
      sortType, sortBtnClick, films, searchFilter,
    } = this.props;
    return (
      <section className="searchResults">
        <SearchResultsHeader
          resultsNumber={films.length}
          sortType={sortType}
          sortBtnClick={sortBtnClick}
        />
        <ResultsList films={films} />
      </section>
    );
  }
}

SearchResults.propTypes = {
  sortType: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  sortBtnClick: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
};

export default SearchResults;
