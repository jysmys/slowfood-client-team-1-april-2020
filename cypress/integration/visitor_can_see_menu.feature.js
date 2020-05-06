describe("Visitor can see menu", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json",
    });
  });

  it("sucessfully", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#product-1").within(() => {
      cy.get("#product-title").should("contain", "pizza");
      cy.get("#product-description").should("contain", "best pizza in town");
      cy.get("#product-price").should("contain", "10");
    });
  });
});
