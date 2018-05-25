import { connect } from 'react-redux';
import SearchBtn from '../components/SearchBtn.jsx';
import { getAllFilms } from '../../../redux/actions';

const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
  sortType: state.sortType,
});

const mapDispatchToProps = dispatch => ({
  getAllFilms: (searchQuery, searchBy, sortBy) => dispatch(getAllFilms(searchQuery, searchBy, sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBtn);
