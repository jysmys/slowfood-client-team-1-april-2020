describe("User can pay for her order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/products",
      response: "fixture.products.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/orders",
      response: "fixture.order.json",
    });
    cy.route({
      method: "PUT",
      url: "http://localhost:3000/api/v1/order/1",
      response: "fixture.order.json",
    });
    cy.visit("http://localhost:3000");
    cy.get("#product-2").within(() => {
      cy.get("button").contains("Add to order").click();
    });
    cy.get("#product-3").within(() => {
      cy.get("button").contains("Add to order").click();
    });
    cy.get("button").contains("View order").click();
  });

  it("user can make a payment for her order", () => {
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
