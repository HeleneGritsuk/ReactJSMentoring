import React from 'react';
import './style.css';

function ResultsList({ films, getFilmInfo }) {
  if (films.length) {
    return (
      <div className="searchResults__content container">
        {
            films.map(film =>
            (<a className="filmItem" key={film.id} onClick = { getFilmInfo.bind(null, film.id, film.genre) }>
              <img className="filmItem__img" src={film.imgSrc} />
              <div className="filmItem__info">
                <div className="filmItem__title">
                  {film.name}
                </div>
                <div className="filmItem__year">
                  <span>{new Date(film.year).getFullYear()}</span>
                </div>
              </div>
              <div className="filmItem__genre">
                {film.genre.join(' & ')}
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
