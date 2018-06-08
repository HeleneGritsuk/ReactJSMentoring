import { connect } from "react-redux";
import FilmInfo from "../components/FilmInfo.jsx";
import { getFilmInfo } from "../../../redux/actions";

const mapStateToProps = state => ({
  filmInfo: state.filmInfo.data,
  films: state.films,
  searchFilmId: state.searchFilmId.id,
  genres: state.searchFilmId.genres
});
const mapDispatchToProps = dispatch => ({
  getFilmInfo: (id, genres) => dispatch(getFilmInfo(id, genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
