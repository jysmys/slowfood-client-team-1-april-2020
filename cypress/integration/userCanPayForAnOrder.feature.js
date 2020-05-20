describe("User can pay for her order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture:products.json",
    });
  });

  describe("User add item order", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/orders",
        response: "fixture.post_order.json",
      });
      cy.route({
        method: "PUT",
        url: "http://localhost:3000/api/v1/orders/1",
        response: "fixture.put_order.json",
      });
    });
    it("first item", () => {
      cy.visit("/");
      cy.get("#menu-tab").click();
      cy.get("#product-1").within(() => {
        cy.get("button").click();
      });
    });
    it("second item", () => {
      cy.get("#product-1").within(() => {
        cy.get("button").click();
      });

      //   cy.get("#product-3").within(() => {
      //     cy.get("button").contains("Add to order").click();
      //   });
      //   cy.get("button").contains("View order").click();
    });
    xit("user can make a payment for her order", () => {
      cy.route({
        method: "PUT",
        url: "http://localhost:3000/api/v1/",
        body: { activity: finalize },
        response: "fixture.order.json",
      });
      cy.get("button").contains("confirm").click();
      cy.get("payment-form").should("exist");
      cy.wait(1000);
      cy.get('iFrame[name^="__privateStripeFrame5"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 50 });
      });
    });
  });
});
