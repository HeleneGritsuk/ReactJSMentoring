import React from 'react';
import './style.css';

function ResultsList({ films }) {
  if (films.length) {
    return (
      <div className="searchResults__content container">
        {
            films.map(film =>
            (<div className="filmItem" key={film.id}>
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
            </div>))}
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
