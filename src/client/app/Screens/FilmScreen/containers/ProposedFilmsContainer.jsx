import { connect } from 'react-redux';
import { setSortingType, getFilmInfo } from '../../../redux/actions';
import ProposedFilms from '../components/ProposedFilms.jsx';

const mapStateToProps = state => ({
  films: state.filmInfo.relatedFilms,
  genre: state.filmInfo.genre
});

const mapDispatchToProps = dispatch => ({
  getFilmInfo: (id, genre) => dispatch(getFilmInfo(id, genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposedFilms);
