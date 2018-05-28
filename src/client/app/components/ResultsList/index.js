import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ResultsList(props) {
  const {films, getFilmInfo} = props;

  const getItems = () => {
    return films.map(film =>
      (<a className="filmItem" key={film.id} onClick={getFilmInfo(film.id, film.genres)}>
        <img className="filmItem__img" src={film.poster_path}/>
        <div className="filmItem__info">
          <div className="filmItem__title">
            {film.title}
          </div>
          <div className="filmItem__year">
            <span>{new Date(film.release_date).getFullYear()}</span>
          </div>
        </div>
        <div className="filmItem__genre">
          {film.genres.join(' & ')}
        </div>
      </a>))
  };

  if (films.length) {
    return (
      <div className="searchResults__content container">
        {getItems()}
      </div>
    );
  }

  return (
    <div className="searchResults__content container">
      <span className="searchResults__message">No films found</span>
    </div>
  );
}

ResultsList.propTypes = {
  films: PropTypes.array.isRequired,
  getFilmInfo: PropTypes.func.isRequired,
};

export default ResultsList;
