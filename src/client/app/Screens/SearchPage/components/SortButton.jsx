import React from 'react';

const SortButton = ({
  sort, sortType, sortBtnClick, children,
}) => (
  <button onClick={sortBtnClick.bind(null, sort)} className={sort === sortType ? 'active searchResults__sortBtn' : 'searchResults__sortBtn'}>{children}</button>
);
export default SortButton;
