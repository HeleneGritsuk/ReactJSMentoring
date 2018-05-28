import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';


const ResultsList = (props) => {
  const { films } = props;
  const getItems = () => films.map(film =>
    (<Link to={`/film/${film.id}`} className="filmItem" key={film.id}>
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
    </Link>));

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
};

ResultsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default ResultsList;
