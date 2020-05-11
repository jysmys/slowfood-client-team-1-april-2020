describe("Visitor can see menu", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json",
    });
    cy.visit("/");
    cy.get('#menu-tab').click()
  });

  it("sucessfully", () => {
    cy.get("#product-1").within(() => {
      cy.get("#product-title").should("contain", "pizza");
      cy.get("#product-description").should("contain", "best pizza in town");
      cy.get("#product-price").should("contain", "10");
    });
  });
});
