import React from 'react';

const ProposedListHeader = ({ genres }) => (
  <div className="searchResults__header">
    <div className="searchResults__header-content container">
      Films by {genres[0]} genre
    </div>
  </div>

);

export default ProposedListHeader;
