import React from 'react';

const SearchHeader = ({ filmInfo }) => (
  <div className="filmInfo">
    <img className="filmInfo__img" src={filmInfo.imgSrc} />
    <div className="filmInfo__text">
      <h2>{filmInfo.name}</h2>
      <div className="filmInfo__genre">{filmInfo.genre.join(' & ')}</div>
      <div>
        <div>{new Date(filmInfo.year).getFullYear()}</div>
        <div>{filmInfo.runtime} min</div>
      </div>
      <p>
        {filmInfo.description}
      </p>
    </div>

  </div>

);

export default SearchHeader;
