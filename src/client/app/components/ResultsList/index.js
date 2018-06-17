// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

type ResultsListProps = {
  films: Array<Object>,
  setSearchFilmId: (id: Number, genres: Array<String>) => Function
};

const ResultsList = (props: ResultsListProps) => {
  const { films, setSearchFilmId } = props;
  const getItems = () =>
    films.map(film => (
      <Link
        to={`/film/${film.id}`}
        className="filmItem"
        key={film.id}
        onClick={setSearchFilmId(film.id, film.genres)}
      >
        <img className="filmItem__img" src={film.poster_path} />
        <div className="filmItem__info">
          <div className="filmItem__title">{film.title}</div>
          <div className="filmItem__year">
            <span>{new Date(film.release_date).getFullYear()}</span>
          </div>
        </div>
        <div className="filmItem__genre">{film.genres.join(" & ")}</div>
      </Link>
    ));

  if (films.length) {
    return <div className="searchResults__content container">{getItems()}</div>;
  }
  return (
    <div className="searchResults__content container">
      <span className="searchResults__message">No films found</span>
    </div>
  );
};

ResultsList.defaultProps = {
  films: []
};

export default ResultsList;
