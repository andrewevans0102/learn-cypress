describe('Form Test', () => {
  it('should visit home page', () => {
    cy.visit('/home-page');
  });

  it('should visit home page and click start', () => {
    cy.visit('/home-page');
    cy.get('#startButton').click();
    cy.get('h1').should('contain', 'Learn Cypress');
  });

  it('should go to the forms page and enter login information', () => {
    cy.visit('/home-page');
    cy.get('#startButton').click();
    cy.get('h1').should('contain', 'Learn Cypress');
    cy.get('#formsButton').click();
    cy.get('#email').type('HanSolo@gmail.com');
    cy.get('#password').type('password');
    cy.get('#submitButton').click();
    cy.get('#popupMessage').should('contain', 'login successful');
  });
});
