describe("Visitor can see their order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/orders",
      response: "fixture:orders.json",
    });
    cy.visit("http://localhost:3001/");
  });

  it("sucessfully", () => {  
    cy.get("#order-item-1").within(() => {
      cy.get("#product-title").should("contain", "pizza");
      cy.get("#product-price").should("contain", "10");
      
    });
  });

  it("calculates total price of order", () => {
    cy.get("#total-price").should("contain", "23"); 
  });
});
 