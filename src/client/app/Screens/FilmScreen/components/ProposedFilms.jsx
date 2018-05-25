import React from 'react';
import { render } from 'react-dom';
import ProposedListHeader from './ProposedListHeader.jsx';
import ResultsList from '../../../components/ResultsList';

const ProposedFilms = ({ genres, films, getFilmInfo })=> (
      <section className="searchResults">

          <ProposedListHeader genres={genres} />
          <ResultsList films={films} getFilmInfo = {getFilmInfo}/>

      </section>
    );


export default ProposedFilms;
