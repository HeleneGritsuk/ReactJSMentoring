import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import SearchFilterButton from "../containers/SearchFilterButton.jsx";
import SearchFilmButton from "../containers/SearchFilmButton.jsx";
import "../styles/SearchPageHeader.css";

const SearchFormFooter = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;

const SearchForm = styled.div`
  text-transform: uppercase;
  font-family: "Arial";
`;

// const SearchBtn = styled(SearchFilmButton)`
//   background: #757373;
//   box-shadow: none;
//   border: none;
//   padding: 5px 15px;
//   text-transform: uppercase;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   margin-left: auto;
//   border-radius: 6px;
// `;

const SearchFormInput = styled.input`
  margin-bottom: 30px;
`;

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
          <SearchForm>
            <h3>Find your movie</h3>
            <input
              className="searchForm__input"
              type="text"
              ref={this.textInput}
            />
            <SearchFormFooter>
              <div>
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
            </SearchFormFooter>
          </SearchForm>
        </div>
      </div>
    );
  }
}

export default SearchPageHeader;
