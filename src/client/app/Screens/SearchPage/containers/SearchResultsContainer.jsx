import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults.jsx';
import { setSortingType, getFilmInfo } from '../../../redux/actions';

const mapStateToProps = state => ({
  sortType: state.sortType,
  films: state.films,
});

const mapDispatchToProps = dispatch => ({
  sortBtnClick: sortType => dispatch(setSortingType(sortType)),
  getFilmInfo: (id, genre) => () => dispatch(getFilmInfo(id, genre)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
