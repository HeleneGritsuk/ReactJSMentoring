import React from 'react';

const SearchHeader = ({ filmInfo }) => (
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

export default SearchHeader;
