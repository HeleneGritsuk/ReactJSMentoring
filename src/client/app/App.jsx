import React from 'react';
import { render } from 'react-dom';
import Content  from './Content.jsx';
import Footer  from './Footer.jsx';
import SearchContainer  from './SearchContainer.jsx';
import SearchResultsContainer  from './SearchResultsContainer.jsx';
import './style.css';
import './images/awesome.png';


class App extends React.Component {
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

export default App;
