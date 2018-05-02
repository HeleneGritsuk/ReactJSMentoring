import React from 'react';
import { render } from 'react-dom';
import Footer  from '../../components/Footer';
import SearchContainer  from './components/SearchContainer.jsx';
import SearchResultsContainer  from './components/SearchResultsContainer.jsx';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  render () {
    return(
      <div className='main-wrapper'>
        <SearchContainer/>
        <SearchResultsContainer/>
        <Footer/>
      </div>
    );
  }
}

export default SearchScreen;
