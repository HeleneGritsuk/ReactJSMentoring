import React from 'react';
import { render } from 'react-dom';
import Footer from '../../components/Footer';
import SearchPageHeader from './components/SearchPageHeader.jsx';
import SearchResultsContainer from './components/SearchResultsContainer.jsx';
import { connect } from 'react-redux';
import { setSearchFilter } from '../../redux/actions';
import './style.css';


const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (searchCriteria) => dispatch(setSearchFilter(searchCriteria)),
});

const SearchScreen = ({ searchFilter, onClick }) => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader searchFilter = {searchFilter} onClick={onClick} />
    <SearchResultsContainer />
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
