describe("User can add products to order", () => {
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
      response: { message: "The product was added to your order" },
    });
    cy.visit("/");
  });

  it("button is visible", () => {
    cy.get("#product-1").within(() => {
      cy.get("#add-to-order").should("contain", "Add to Order");
    });
  });

  it("and gets a success message", () => {
    cy.get("div#product-1").within(() => {
      cy.get("button#add-to-order").click();
    });
    cy.get("#success-message").contains(`The product was added to your order`);
  });

  // it("and it is displayed in the order", () => {
  //   cy.get("#product-1").within(() => {
  //     cy.get("#add-to-order").click();
  //   });
  //   cy.get("#cart-tab").click();
  //   cy.get("#order").should("contain", "pizza");
  // });

  // it("and the quantity is displayed in the order"),
  //   () => {
  //     cy.get("#product-1").within(() => {
  //       cy.get("#add-to-order").click();
  //     });
  //     cy.get("#product-1").within(() => {
  //       cy.get("#add-to-order").click();
  //     });
  //     cy.get("#cart-tab").click();
  //     cy.get("#order").within(() => {
  //       cy.get("#quantity").should("contain", "2");
  //     });
  //   };

  // it("and an empty cart displays message", () => {
  //   cy.get("#cart-tab").click();
  //   cy.get("#order").should("contain", "You have no products in your order");
  // });
});
