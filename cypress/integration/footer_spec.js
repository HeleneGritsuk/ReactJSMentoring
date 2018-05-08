import Footer from '../../src/client/app/components/Footer';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App ', () => {
  it('render 2 screens on click button', () => {
    cy.visit('/');
    cy.get('.SearchScreenBtn').click();
    cy.contains('.searchForm', 'Find your movie');
    cy.get('.FilmScreenBtn').click();
    cy.get('body').find('.filmInfo');
  })
  it('searchBtn on FilmPage redirect on Main Screen',() => {
    cy.get('.homeBtn').click();
    cy.get('body').find('.searchForm');
  })
})
