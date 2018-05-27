import { connect } from 'react-redux';
import FilterButton from '../components/FilterButton.jsx';
import { setSearchFilter } from '../../../redux/actions';

const mapStateToProps = state => ({
  searchFilter: state.searchFilter
});

const mapDispatchToProps = dispatch => {
  return {
    setSearchFilter: searchCriteria => () => dispatch(setSearchFilter(searchCriteria)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
