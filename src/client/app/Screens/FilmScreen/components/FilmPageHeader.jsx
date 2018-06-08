import React from "react";
import Header from "../../../components/Header";
import FilmInfoContainer from "../containers/FilmInfoContainer.jsx";

const FilmPageHeader = props => {
  const { goToHomePage } = props;

  return (
    <div className="pageHeader">
      <div className="container">
        <Header isFilmScreen/>
          <FilmInfoContainer />
      </div>
    </div>
  );
};

export default FilmPageHeader;
