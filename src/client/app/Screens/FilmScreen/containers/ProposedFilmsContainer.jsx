import { connect } from "react-redux";
import { setSearchFilmId } from "../../../redux/actions";
import ProposedFilms from "../components/ProposedFilms.jsx";

const mapStateToProps = state => ({
  films: state.films,
  relatedFilms: state.filmInfo.relatedFilms,
  genres: state.filmInfo.data.genres
});
const mapDispatchToProps = dispatch => ({
  setSearchFilmId: (id, genres) => () => dispatch(setSearchFilmId(id, genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposedFilms);
