import React from 'react';
import { render } from 'react-dom';
import Header  from './Header.jsx';
import SearchForm from './SearchForm.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="search">
        <div className="container">
          <Header/>
          <SearchForm/>
        </div>

      </div>
    );
  }
}

export default SearchContainer;
