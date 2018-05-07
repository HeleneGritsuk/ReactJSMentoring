import React from 'react';
import FilmScreen from './index';
import renderer from 'react-test-renderer';


test('FilmScreen should render film view correctly', () => {
  const component = renderer.create(
    <FilmScreen/>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
