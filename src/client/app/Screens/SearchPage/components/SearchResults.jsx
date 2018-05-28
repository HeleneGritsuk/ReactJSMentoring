import React from 'react';
import SearchResultsHeader from './SearchResultsHeader.jsx';
import ResultsList from '../../../components/ResultsList';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');

    // this.setState({
    //   searchQuery: nextProps.match.params.searchQuery
    // });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, this.props );

    // const { sortType, searchFilter, getAllFilms } = this.props;
    // if (nextProps.searchQuery !== this.props.searchQuery) {
    //   getAllFilms(this.props.match.params.searchQuery, searchFilter, sortType);
    // }

  }
  componentDidUpdate(prevProps) {
    // const {sortType, searchFilter, getAllFilms} = this.props;
    // if (this.props.searchQuery !== prevProps.searchQuery) {
    //   getAllFilms(this.props.match.params.searchQuery, searchFilter, sortType);
    // }
  }
  render() {
    const {
      sortType, sortBtnClick, films, getFilmInfo, searchFilter,
    } = this.props;
    return (
      <section className="searchResults">
        <SearchResultsHeader
          resultsNumber={films.length}
          sortType={sortType}
          sortBtnClick={sortBtnClick}
        />
        <ResultsList films={films} getFilmInfo={getFilmInfo} />
      </section>
    );
  }
}

export default SearchResults;
