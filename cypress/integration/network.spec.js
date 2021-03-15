describe("Network Requests Page Test", () => {
  beforeEach(() => {
    // server starts to listen for http calls
    cy.server();
    // create route that cypress will listen for, here it is the films endpoint of the SWAPI
    cy.route("GET", "https://swapi.dev/api/films/**").as("films");
  });

  it("should go to the network requests page and select a movie", () => {
    cy.visit("/home-page");
    cy.get("#startButton").click();
    cy.get("h1").should("contain", "Learn Cypress");
    cy.get("#networkButton").click();
    cy.get("#movieSelect").select("A New Hope (1)");
    cy.get("#detailsButton").click();
    cy.get("#movieTitle").should("contain", "A New Hope");
    cy.get("#episodeNumber").should("contain", 4);
  });

  it("should go to the network requests page and verify the HTTP payload called", () => {
    cy.visit("/home-page");
    cy.get("#startButton").click();
    cy.get("h1").should("contain", "Learn Cypress");
    cy.get("#networkButton").click();
    cy.get("#movieSelect").select("A New Hope (1)");
    cy.get("#detailsButton").click();

    // await the response from the SWAPI http call
    cy.wait("@films").then((films) => {
      expect(films.response.body.title).to.equal("A New Hope");
    });

    cy.get("#movieTitle").should("contain", "A New Hope");
    cy.get("#episodeNumber").should("contain", 4);
  });
});
