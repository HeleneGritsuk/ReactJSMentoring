import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "../src/client/app/components/Header";

storiesOf("Header", module).add("with button", () => (
  <Header isFilmScreen={true} />
));
