import React from 'react';

function ResultsList ({films}) {
  if(films.length) {
    return (
      <div className ="searchResults__content">
          {
            films.map((film)=>
            <div className='filmItem' key = {film.id}>
              <img src={film.imgSrc}></img>
              <div className='filmItem__info'>
                <div className='filmItem__title'>
                  {film.name}
                </div>
                <div className='filmItem__year'>
                  {film.year}
                </div>
              </div>
              <div className='filmItem__genre'>
                {film.genre}
              </div>
            </div>
          )}
      </div>
    )
  }
  return (
    <div className ="searchResults__content">
        <span class="searchResults__message">No films found</span>
    </div>
  )

};

export default ResultsList;
