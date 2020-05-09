describe("Visitor can see their order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/orders",
      response: "fixture:orders.json",
    });
  });

  it("sucessfully", () => {
    cy.visit("http://localhost:3001/");
    cy.get("#order-1").within(() => {
      cy.get("#order-title").should("contain", " ?");
      cy.get("#order-description").should("contain", "?");
      
    });
  });
});
