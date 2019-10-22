describe('Network Requests Page Test', () => {
  before(() => {
    cy.start();
  });

  it('should use a Cypress command to go to the forms page', () => {
    cy.get('#formsButton').click();
    cy.get('h1').should('contain', 'Forms Page');
  });
});
