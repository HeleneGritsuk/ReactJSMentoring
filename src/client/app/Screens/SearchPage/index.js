import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import SearchPageHeader from './components/SearchPageHeader.jsx';
import SearchResultsContainer from './components/SearchResultsContainer.jsx';
import { setSearchFilter, setSortingType, getAllFilms } from '../../redux/actions';
import './style.css';


const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
  sortType: state.sortType,
  films: state.films
});

const mapDispatchToProps = dispatch => ({
  setSearchFilter: (searchCriteria) => dispatch(setSearchFilter(searchCriteria)),
  sortBtnClick: (sortType) => dispatch(setSortingType(sortType)),
  getAllFilms: (searchQuery, searchBy, sortBy) => dispatch(getAllFilms(searchQuery, searchBy, sortBy))
});

const SearchScreen = ({ searchFilter,setSearchFilter, onClick, sortType, sortBtnClick, getAllFilms, films }) => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader searchFilter={searchFilter} sortType={sortType} setSearchFilter={setSearchFilter} getAllFilms = {getAllFilms} />
    <SearchResultsContainer sortType={sortType} sortBtnClick = {sortBtnClick} films = {films} />
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
