import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

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
        <div className="filmInfo">
          <img
            className="filmInfo__img"
            alt="poster"
            src={filmInfo.poster_path}
          />
          <div className="filmInfo__text">
            <h2>{filmInfo.title}</h2>
            <div className="filmInfo__genre">{filmInfo.genres.join(" & ")}</div>
            <div>
              <div>{new Date(filmInfo.release_date).getFullYear()}</div>
              <div>{filmInfo.runtime} min</div>
            </div>
            <p>{filmInfo.overview}</p>
          </div>
        </div>
      );
    }
    return <div className="filmInfo">Loading...</div>;
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
