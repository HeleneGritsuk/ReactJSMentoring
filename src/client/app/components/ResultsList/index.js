import React from 'react';
import './style.css';

function ResultsList({ films, getFilmInfo }) {
  if (films.length) {
    return (
      <div className="searchResults__content container">
        {
            films.map(film =>
            (<a className="filmItem" key={film.id} onClick = { getFilmInfo.bind(null, film.id, film.genres) }>
              <img className="filmItem__img" src={film.poster_path} />
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
            </a>))}
      </div>
    );
  }
  return (
    <div className="searchResults__content container">
      <span className="searchResults__message">No films found</span>
    </div>
  );
}

export default ResultsList;
