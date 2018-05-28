import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ResultsList = ({ films, getFilmInfo }) => {
  if (films.length) {
    return (
      <div className="searchResults__content container">
        {
            films.map(film =>
            (
              <Link to={`/film/${film.id}`} className="filmItem" key={film.id} >
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
              </Link>))}
      </div>
    );
  }
  return (
    <div className="searchResults__content container">
      <span className="searchResults__message">No films found</span>
    </div>
  );
};

export default ResultsList;
