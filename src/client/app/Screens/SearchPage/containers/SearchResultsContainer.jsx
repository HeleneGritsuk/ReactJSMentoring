import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults.jsx';
import { setSortingType } from '../../../redux/actions';

const mapStateToProps = state => ({
  sortType: state.sortType,
  films: state.films
});

const mapDispatchToProps = dispatch => ({
  sortBtnClick: (sortType) => dispatch(setSortingType(sortType)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
