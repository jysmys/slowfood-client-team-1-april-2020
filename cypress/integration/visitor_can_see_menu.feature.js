describe("User can see menu", () => {
  beforeEach(() => {
    cy.server();
  });

  it("visitor can see menu", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/v1/products",
      response: "fixture:products.json",
    });
    cy.visit("http://localhost:3001/");
    cy.get("button#add").should("be.visible");
    cy.get("button#minus").should("be.visible");
    cy.get("td#numberOfItems").should("be.visible");
    cy.get("button#plus").should("be.visible");
    cy.contains("pizza");
  });

  it("no items in the menu", () => {
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/v1/products",
      response: { data: {} },
    });
    cy.visit("http://localhost:3001/");
    cy.contains("Nothing on the menu at the moment");
  });
});
