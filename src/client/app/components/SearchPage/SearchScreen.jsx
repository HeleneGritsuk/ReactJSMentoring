import React from 'react';
import { render } from 'react-dom';
import Footer  from '../Footer/Footer.jsx';
import SearchContainer  from './SearchContainer.jsx';
import SearchResultsContainer  from './SearchResultsContainer.jsx';

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
