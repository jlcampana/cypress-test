/// <reference types="cypress" />

describe("home usability", () => {
  before(() => {
    cy.visit("/");
  })

  it("images has src attribute", () => {
    cy.get('img').each(($image, _index, _$list) => {
      cy.wrap($image).should('have.attr', 'src');
    });
  });

  it.skip("images has alt attribute", () => {
    cy.get('img').each(($image, index, $list) => {
      cy.wrap($image).should('have.attr', 'alt');
    });
  });

  it("links has href attribute", () => {
    cy.get('a').each(($link, index, $list) => {
      cy.wrap($link).should('have.attr', 'href');
    });
  });

  it("links has title attribute", () => {
    cy.get('a').each(($link, index, $list) => {
      cy.wrap($link).should('have.attr', 'title');
    });
  });
});