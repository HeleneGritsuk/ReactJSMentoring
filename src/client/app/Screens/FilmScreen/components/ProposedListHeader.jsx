import React from 'react';

const ProposedListHeader = ({ genre }) => (
  <div className="searchResults__header">
    <div className="searchResults__header-content container">
      Films by {genre[0]} genre
    </div>
  </div>

);

export default ProposedListHeader;
