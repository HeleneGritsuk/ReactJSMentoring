import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchResults from '../components/SearchResults.jsx';
import { setSortingType, getFilmInfo, getAllFilms } from '../../../redux/actions';

const mapStateToProps = (state) => ({
  sortType: state.sortType,
  films: state.films,
  searchQuery: state.searchQuery,
  searchFilter: state.searchFilter,
});

const mapDispatchToProps = dispatch => ({
  sortBtnClick: sortType => dispatch(setSortingType(sortType)),
  getFilmInfo: (id, genre) => () => dispatch(getFilmInfo(id, genre)),
  getAllFilms: (searchQuery, searchBy, sortBy) => dispatch(getAllFilms(searchQuery, searchBy, sortBy))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
