import React from 'react';
import { render } from 'react-dom';
import ProposedListHeader from './ProposedListHeader.jsx';
import ResultsList from '../../../components/ResultsList';

const ProposedFilms = ({ genres, relatedFilms, getFilmInfo })=> (
      <section className="searchResults">

          <ProposedListHeader genres={genres} />
          <ResultsList films={relatedFilms} getFilmInfo = {getFilmInfo}/>

      </section>
    );


export default ProposedFilms;
