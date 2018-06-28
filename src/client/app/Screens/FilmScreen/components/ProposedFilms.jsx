import React from "react";
import PropTypes from "prop-types";
import ProposedListHeader from "./ProposedListHeader.jsx";
import ResultsList from "../../../components/ResultsList";

const ProposedFilms = ({ genres, relatedFilms, setSearchFilmId }) => (
  <section className="searchResults">
    <ProposedListHeader genres={genres} />
    <ResultsList films={relatedFilms} setSearchFilmId={setSearchFilmId} />
  </section>
);

ProposedFilms.propTypes = {
  setSearchFilmId: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  relatedFilms: PropTypes.array.isRequired
};

ProposedFilms.defaultProps = {
  films: [],
  genres: [],
  relatedFilms: []
};
export default ProposedFilms;
