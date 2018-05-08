import React from 'react';
import ResultsList from './index';
import renderer from 'react-test-renderer';
import { filmsMockArray } from '../../mocks';
import { text, shallow } from 'enzyme';

test('ResultList should render list of films', () => {
  const component = renderer.create(
    <ResultsList films = { filmsMockArray }/>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('ResultList shoud display text "No films found" when there is no films found', () => {
  const component = shallow(
    <ResultsList films = { [] }/>,
  );
  expect(component.text()).toEqual('No films found')
});
