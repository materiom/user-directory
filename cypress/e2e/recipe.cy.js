///<reference types="Cypress" />
describe("Materiom Dashboard", () => {
  // find all links in the page that aren't
  // mail or external links and clicks them
  // and checks if they direct to the correct URL

  it("loads recipe data", () => {
    let res;

    cy.request("GET", "https://materiom.org/api/recipe/24")
    .its('body').should('exist',)
  });

  it("check all links to sites", () => {
    cy.viewport("macbook-15");
    cy.visit("/recipe/24");
    cy.get('a:not([href*="mailto:"])')
      .not('[target*="_blank"]')
      .each((page) => {
        const href = page.prop("href");
        cy.visit(href);
        cy.url().should("include", href);
        cy.get('[data-cy="404"]').should("not.exist");
        cy.go("back");
      });
  });

  // for external links best practice is to
  // check for href and target attributes to
  // avoid CORS
  // it("has working link to twitter", () => {
  //   cy.viewport("macbook-15");
  //   cy.visit("/recipe/24");
  //   cy.get('[data-cy="twitterLink"]')
  //     .should("have.attr", "href", "https://twitter.com/materiom_")
  //     .should("have.attr", "target", "_blank");
  // });
});
