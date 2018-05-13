import React from 'react';
import { render } from 'react-dom';
import Footer from '../../components/Footer';
import SearchPageHeader from './components/SearchPageHeader.jsx';
import SearchResultsContainer from './components/SearchResultsContainer.jsx';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../redux/actions';
import './style.css';


const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (searchCriteria) => dispatch(setVisibilityFilter(searchCriteria)),
});

const SearchScreen = ({ visibilityFilter, onClick }) => (
  <div className="main-wrapper searchPage">
    <SearchPageHeader visibilityFilter = {visibilityFilter} onClick={onClick} />
    <SearchResultsContainer />
    <Footer />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
