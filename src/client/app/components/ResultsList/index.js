// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";

const Message = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-size: 20px;
`;

const FilmInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;

const FilmYear = styled.div`
  margin-left: auto;
`;
const FilmItem = styled(Link)`
  margin: 0 1.1% 35px;
  width: 31%;
  text-decoration: none;
  color: #000;
`;

const FilmItemYearSpan = styled.span`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  line-height: 23px;
`;

const FilmImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const FilmTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 17px;
`;

const FilmGenre = styled.div`
  color: #666;
`;

type ResultsListProps = {
  films: Array<Object>,
  setSearchFilmId: (id: Number, genres: Array<String>) => Function
};

const ResultsList = (props: ResultsListProps) => {
  const { films, setSearchFilmId } = props;
  const getItems = () =>
    films.map(film => (
      <FilmItem
        to={`/film/${film.id}`}
        key={film.id}
        onClick={setSearchFilmId(film.id, film.genres)}
      >
        <FilmImg src={film.poster_path} />
        <FilmInfo>
          <FilmTitle>{film.title}</FilmTitle>
          <FilmYear>
            <FilmItemYearSpan>
              {new Date(film.release_date).getFullYear()}
            </FilmItemYearSpan>
          </FilmYear>
        </FilmInfo>
        <FilmGenre>{film.genres.join(" & ")}</FilmGenre>
      </FilmItem>
    ));

  if (films.length) {
    return <div className="searchResults__content container">{getItems()}</div>;
  }
  return (
    <div className="searchResults__content container">
      <Message>No films found</Message>
    </div>
  );
};

ResultsList.defaultProps = {
  films: []
};

export default ResultsList;
