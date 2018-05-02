import React from 'react';
import { render } from 'react-dom';
import Footer  from '../../components/Footer';
import SearchContainer  from './components/SearchContainer.jsx';
import SearchResultsContainer  from './components/SearchResultsContainer.jsx';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByTitle: true
    }
    this.sortByReleaseDate = this.sortByReleaseDate.bind(this);
  }
  sortByReleaseDate(){

      throw new Error('I crashed!');

  }

  render () {
    return(
      <div className='main-wrapper'>
        <SearchContainer sortByTitle = {this.state.sortByTitle}/>
        <SearchResultsContainer sortByReleaseDate = {this.sortByReleaseDate}/>
        <Footer/>
      </div>
    );
  }
}

export default SearchScreen;
