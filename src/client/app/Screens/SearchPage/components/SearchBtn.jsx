import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const SearchBtn = withRouter((props) => {
  const {
    history, setSearchQuery, inputRef,
  } = props;

  return (
    <button className="searchForm__searchBtn" onClick={() => { history.push(`/search/${inputRef.current.value}`); setSearchQuery(inputRef.current.value); }}>Search</button>
  );
});


export default SearchBtn;

SearchBtn.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
  history: PropTypes.object,
};
