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
      showFilmPage: false,
    };
    this.handleSearchPageClick = this.handleSearchPageClick.bind(this);
    this.handleFilmPageClick = this.handleFilmPageClick.bind(this);
  }
  handleSearchPageClick() {
    this.setState({
      showSearchPage: true,
      showFilmPage: false,
    });
  }
  handleFilmPageClick() {
    this.setState({
      showSearchPage: false,
      showFilmPage: true,
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default App;
