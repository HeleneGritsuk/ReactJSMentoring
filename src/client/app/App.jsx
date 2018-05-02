import React from 'react';
import { render } from 'react-dom';
import SearchScreen from './components/SearchPage/SearchScreen.jsx';
import FilmScreen from './components/FilmScreen/index.jsx';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      showFilmPage: false
    }
    this.handleSearchPageClick = this.handleSearchPageClick.bind(this);
    this.handleFilmPageClick = this.handleFilmPageClick.bind(this);

  }
  handleSearchPageClick() {
    this.setState({
      showSearchPage: true,
      showFilmPage: false
     });
  }
  handleFilmPageClick() {
    this.setState({
      showSearchPage: false,
      showFilmPage: true
     });
  }
  rend
  render () {

    return(
      <div className='main-wrapper'>
        <div className = 'screensBtnWrapper'>
          <button onClick = {this.handleSearchPageClick}>Show SearchPage view</button>
          <button onClick = {this.handleFilmPageClick}>Show FilmPage view</button>
        </div>
        {this.state.showSearchPage ? (<SearchScreen/>) : null}
        {this.state.showFilmPage ? (<FilmScreen goToHomePage = {this.handleSearchPageClick}/>) : null}
      </div>
    );
  }
}

export default App;
