describe('List Test', () => {
  it('should go to the list page and add a value', () => {
    cy.visit('/home-page');
    cy.get('#startButton').click();
    cy.get('h1').should('contain', 'Learn Cypress');
    cy.get('#listsButton').click();
    cy.get('#createInput').type('use the force Luke!');
    cy.get('#createButton').click();
    cy.get('li')
      .eq(4)
      .should('contain', 'use the force Luke!');
  });

  it('should go to the list page and delete a value', () => {
    cy.visit('/home-page');
    cy.get('#startButton').click();
    cy.get('h1').should('contain', 'Learn Cypress');
    cy.get('#listsButton').click();
    cy.get('#createInput').type('use the force Luke!');
    cy.get('#createButton').click();
    cy.get('li')
      .eq(4)
      .should('contain', 'use the force Luke!');
    cy.get('li > .value-row > .btn')
      .eq(4)
      .click();
    cy.get('ul')
      .its('length')
      .should('be.eq', 4);
  });
});
