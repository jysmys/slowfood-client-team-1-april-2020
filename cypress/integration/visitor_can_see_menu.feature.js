import { getByAltText } from "@testing-library/react";

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
    cy.get("tr#1").contains("1");
    cy.get("td#pizza").should("contain", "pizza");
    cy.get("td#price").should("contain", "6");
  });
});
