import { connect } from 'react-redux';
import SearchBtn from '../components/SearchBtn.jsx';
import { setSearchQuery } from '../../../redux/actions';


const mapDispatchToProps = dispatch => ({
  setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery)),
});

export default connect(null, mapDispatchToProps)(SearchBtn);
