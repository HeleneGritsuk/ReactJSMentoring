import React from "react";
import Footer from "./index";
import renderer from "react-test-renderer";

test("Footer is rendered normally", () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
