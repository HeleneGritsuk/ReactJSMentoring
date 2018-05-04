import React from 'react';

const SearchHeader = ({filmInfo}) => (
  <div className='filmInfo'>
    <img src={filmInfo.filmImg}></img>
    <div className='filmInfo__text'>
      <h2>{filmInfo.filmTitle}</h2>
      <div className='filmInfo__genre'>{filmInfo.genre}</div>
      <div>
          <div>{filmInfo.year}</div>
          <div>{filmInfo.duration} min</div>
      </div>
      <p>
        {filmInfo.description}
      </p>
    </div>

  </div>

);

export default SearchHeader;
