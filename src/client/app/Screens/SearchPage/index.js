import React from 'react';
import { render } from 'react-dom';
import Footer  from '../../components/Footer';
import SearchContainer  from './components/SearchContainer.jsx';
import SearchResultsContainer  from './components/SearchResultsContainer.jsx';
import './style.css';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByTitle: true
    }
    this.sortByReleaseDate = this.sortByReleaseDate.bind(this);
    this.sortByRaiting = this.sortByRaiting.bind(this);
  }
  sortByReleaseDate(){
      console.log('sortByReleaseDate');
  }
  sortByRaiting(){
      console.log('sortByRating');
  }

  render () {
    return(
      <div className='main-wrapper searchPage'>
        <SearchContainer sortByTitle = {this.state.sortByTitle}/>
        <SearchResultsContainer sortByReleaseDate = {this.sortByReleaseDate} sortByRaiting = {this.sortByRaiting}/>
        <Footer/>
      </div>
    );
  }
}

export default SearchScreen;
