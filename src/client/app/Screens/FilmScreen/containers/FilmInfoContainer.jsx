import { connect } from 'react-redux';
import FilmInfo from '../components/FilmInfo.jsx';

const mapStateToProps = state => ({
  filmInfo: state.filmInfo,
});


export default connect(mapStateToProps, null)(FilmInfo);
