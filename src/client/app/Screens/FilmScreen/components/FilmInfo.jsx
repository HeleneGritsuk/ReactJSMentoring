import React from 'react';
import { withRouter } from 'react-router';

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const filmId = this.props.match.params.id;
    const { filmInfo, getFilmInfo, films } = this.props;
    const film = films.find(elem => elem.id == filmId);
    getFilmInfo(filmId, film.genres);
  }
  render() {
    const { filmInfo } = this.props;
    if (Object.keys(filmInfo).length) {
      return (
        <div className="filmInfo">
          <img className="filmInfo__img" src={filmInfo.poster_path} />
          <div className="filmInfo__text">
            <h2>{filmInfo.title}</h2>
            <div className="filmInfo__genre">{filmInfo.genres.join(' & ')}</div>
            <div>
              <div>{new Date(filmInfo.release_date).getFullYear()}</div>
              <div>{filmInfo.runtime} min</div>
            </div>
            <p>
              {filmInfo.overview}
            </p>
          </div>

        </div>

      );
    }
    return (
      <div className="filmInfo">
          Loading...
      </div>
    );
  }
}
export default withRouter(SearchHeader);
