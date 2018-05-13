import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import SearchPageHeader from './components/SearchPageHeader.jsx';
import SearchResultsContainer from './components/SearchResultsContainer.jsx';
import { setSearchFilter, setSortingType } from '../../redux/actions';
import './style.css';


const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
  sortType: state.sortType,
});

const mapDispatchToProps = dispatch => ({
  onClick: (searchCriteria) => dispatch(setSearchFilter(searchCriteria)),
  sortBtnClick: (sortType) => dispatch(setSortingType(sortType)),
});

const SearchScreen = ({ searchFilter, onClick, sortType, sortBtnClick }) => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader searchFilter={searchFilter} onClick={onClick} />
    <SearchResultsContainer sortType={sortType} sortBtnClick = {sortBtnClick} />
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
