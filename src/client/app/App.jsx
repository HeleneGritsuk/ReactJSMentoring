import React from 'react';
import { render } from 'react-dom';
import SearchScreen from './Screens/SearchPage';
import FilmScreen from './Screens/FilmScreen';
import ErrorBoundary from './components/ErrorBoundary';
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
    this.throwError = this.throwError.bind(this);
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
  throwError() {
    throw new Error('I crashed!');
  }

  render () {
    return(
      <ErrorBoundary>
        <div className='main-wrapper'>
          <div className = 'screensBtnWrapper'>
            <button onClick = {this.handleSearchPageClick}>Show SearchPage view</button>
            <button onClick = {this.handleFilmPageClick}>Show FilmPage view</button>
            <button onClick = {this.throwError}> Throw Error</button>
          </div>
          {this.state.showSearchPage ? (<SearchScreen/>) : null}
          {this.state.showFilmPage ? (<FilmScreen goToHomePage = {this.handleSearchPageClick}/>) : null}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
