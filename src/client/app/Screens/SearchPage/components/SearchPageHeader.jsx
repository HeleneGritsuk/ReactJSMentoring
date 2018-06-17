import React from "react";
import Header from "../../../components/Header";
import SearchFilterButton from "../containers/SearchFilterButton.jsx";
import SearchFilmButton from "../containers/SearchFilmButton.jsx";
import "../styles/SearchPageHeader.css";

class SearchPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  render() {
    return (
      <div className="pageHeader">
        <div className="container">
          <Header />
          <div className="searchForm">
            <h3>Find your movie</h3>
            <input
              type="text"
              className="searchForm__input"
              ref={this.textInput}
            />
            <div className="searchForm__footer">
              <div className="searchForm__searchCriteria">
                <span>Search by</span>
                <SearchFilterButton filter="title">Title</SearchFilterButton>
                <SearchFilterButton filter="genres">Genre</SearchFilterButton>
              </div>
              <SearchFilmButton
                className="searchForm__searchBtn"
                inputRef={this.textInput}
              >
                Search
              </SearchFilmButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPageHeader;
