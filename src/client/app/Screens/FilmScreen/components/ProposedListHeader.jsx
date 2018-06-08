import React from "react";

const ProposedListHeader = ({ genres }) => {
  if (genres && genres.length) {
    return (
      <div className="searchResults__header">
        <div className="searchResults__header-content container">
          Films by {genres[0]} genre
          </div>
      </div>
    );
  }
  return (
    <div className="searchResults__header">
      <div className="searchResults__header-content container" />
    </div>
  );
};

export default ProposedListHeader;
