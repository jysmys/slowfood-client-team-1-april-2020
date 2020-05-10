describe("User can add products", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/orders",
      response: "fixture:create_order.json",
    });
    cy.visit("/");
    cy.get('#menu-tab').click()
  });

  describe("to new order", () => {
    it("Button is visible", () => {
      cy.get("#product-1").within(() => {
        cy.get("#add-to-order").should("contain", "Add to Order");
      });
    });

    it("User gets a success message", () => {
      cy.get("div#product-1").within(() => {
        cy.get("button#add-to-order").click();
      });
      cy.get("#success-message").contains(
        "The product was added to your order"
      );
    });

    it("The product count in cart updates", () => {
      cy.get("div#product-1").within(() => {
        cy.get("button#add-to-order").click();
      });
      cy.get("#cart-tab").should("contain", "1");
    });
  });

  describe("add to existing order", () => {
    beforeEach(() => {
      cy.route({
        method: "PUT",
        url: "http://localhost:3000/api/v1/orders/1",
        response: "fixture:update_order.json",
      });
      cy.get("div#product-1").within(() => {
        cy.get("button#add-to-order").click();
      });
      cy.get("#cart-tab").should("contain", "1");
    });
    it("User gets a success message", () => {
      cy.get("#success-message").contains(
        "The product was added to your order"
      );
    });

    it("The product count in cart updates", () => {
      cy.get("div#product-1").within(() => {
        cy.get("button#add-to-order").click();
      });
      cy.get("#cart-tab").should("contain", "2");
    });
  });
});
