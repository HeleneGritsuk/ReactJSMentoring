import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import { filmsMockArray } from "../src/client/app/mocks";
import Header from "../src/client/app/components/Header";
import ResultsList from "../src/client/app/components/ResultsList";

storiesOf("Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("with button", () => <Header isFilmScreen={true} />)
  .add("without button", () => <Header />);

storiesOf("ResultsList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("ResultList", () => (
    <div className="main-wrapper searchPage">
      <section className="searchResults">
        <ResultsList
          films={filmsMockArray}
          setSearchFilmId={action("redirect to Film Screen")}
        />
      </section>
    </div>
  ));
