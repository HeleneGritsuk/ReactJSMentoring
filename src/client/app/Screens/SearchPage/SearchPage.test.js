import React from 'react';
import SearchScreen from './index';
import renderer from 'react-test-renderer';


test('SearchScreen should render index page correctly', () => {
  const component = renderer.create(
    <SearchScreen/>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
