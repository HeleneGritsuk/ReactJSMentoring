import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const FilmInfo = styled.div`
  display: flex;
  padding: 0 40px 50px;
  align-items: flex-start;
`;

const FilmInfoImg = styled.img`
  width: 300px;
  height: auto;
`;

const FilmInfoText = styled.div`
  margin-left: 30px;
`;

class SearchHeader extends React.Component {
  componentDidMount() {
    const filmId = this.props.match.params.id;
    const { getFilmInfo, films } = this.props;
    const film = films.find(elem => elem.id == filmId);
    getFilmInfo(filmId, film.genres);
  }

  componentDidUpdate(prevProps) {
    const { searchFilmId, genres, getFilmInfo } = this.props;
    if (this.props.searchFilmId !== prevProps.searchFilmId) {
      getFilmInfo(searchFilmId, genres);
    }
  }

  render() {
    const { filmInfo } = this.props;
    if (Object.keys(filmInfo).length) {
      return (
        <FilmInfo>
          <FilmInfoImg alt="poster" src={filmInfo.poster_path} />
          <FilmInfoText>
            <h2>{filmInfo.title}</h2>
            <div>{filmInfo.genres.join(" & ")}</div>
            <div>
              <div>{new Date(filmInfo.release_date).getFullYear()}</div>
              <div>{filmInfo.runtime} min</div>
            </div>
            <p>{filmInfo.overview}</p>
          </FilmInfoText>
        </FilmInfo>
      );
    }
    return <FilmInfo>Loading...</FilmInfo>;
  }
}

SearchHeader.propTypes = {
  getFilmInfo: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  filmInfo: PropTypes.object.isRequired,
  searchFilmId: PropTypes.number.isRequired,
  match: PropTypes.object,
  params: PropTypes.object,
  genres: PropTypes.array.isRequired
};
SearchHeader.defaultProps = {
  films: [],
  genres: []
};
export default withRouter(SearchHeader);
