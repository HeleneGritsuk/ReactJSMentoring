import React from 'react';
import Header from './index';
import renderer from 'react-test-renderer';
import { text, shallow } from 'enzyme';

const setup = propOverrides => {
  const props = Object.assign({
    isFilmScreen: undefined,
    goToHomePage: undefined,
  }, propOverrides)

  const header = shallow(<Header {...props} />)

  return {
    props,
    header,
    homeButton: header.find('.homeBtn'),
  }
}


describe("Header", () => {
  test('Header contains only text on SearchPage', () => {
    const { header } = setup({})
      expect(header.find('.homeBtn').exists()).toEqual(false);
  })
  test('Header contains text and SearchButton on FilmPage', () => {
    const { header } = setup({isFilmScreen: true, goToHomePage: jest.fn()})
    expect(header.find('.homeBtn').exists()).toEqual(true);
  })
  test('handles clicks on "Search" Button', () => {
    const { homeButton, props } = setup({isFilmScreen: true, goToHomePage: jest.fn()})
    homeButton.simulate('click')
    expect(props.goToHomePage).toBeCalledWith()
  });


});
