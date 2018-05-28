import { connect } from 'react-redux';
import { setSortingType, getFilmInfo } from '../../../redux/actions';
import ProposedFilms from '../components/ProposedFilms.jsx';

const mapStateToProps = state => ({
  films: state.films,
  relatedFilms: state.filmInfo.relatedFilms,
  genres: state.filmInfo.data.genres
});


export default connect(mapStateToProps, null)(ProposedFilms);
