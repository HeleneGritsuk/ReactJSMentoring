import React from 'react';
import { render } from 'react-dom';
import Header  from '../../../components/Header';
import SearchForm from './SearchForm.jsx';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <div className="pageHeader">
        <div className="container">
          <Header/>
          <SearchForm sortByTitle = {this.props.sortByTitle}/>
        </div>

      </div>
    );
  }
}

export default SearchContainer;
