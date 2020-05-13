import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { getOrder } from "../modules/requestOrder";
import "../css/navbar.css";

class OrderPage extends Component {
  state = {
    orders: [],
    showPaymentForm: false,
  };

  async componentDidMount() {
    let result = await getOrder();
    this.setState({ orders: result.data.order.products });
  }

  render() {
    let order;
    let totalPrice = 0;
    order = this.state.orders.map((products) => {
      totalPrice += products.price;

      return (
        <Grid.Row
          key={products.product_id}
          id={"order-item-" + products.product_id}
        >
          <Grid.Column width={3} id="product-title">
            {products.title}
          </Grid.Column>
          <Grid.Column width={3} id="product-price">
            $ {products.price}
          </Grid.Column>
        </Grid.Row>
      );
    });

    return (
      <div id="order-display">
        <h1>Your Order:</h1>
        <br />
        <Grid centered id="order-grid">
          {order}
        </Grid>
        <br />
        <h5 id="total-price">Total Price: $ {totalPrice} </h5>
        <Button onClick={() => this.setState({ showPaymentForm: true })}>
          Confirm order
        </Button>
        {this.state.showPaymentForm && (
          <div id="payment-form">
            <PaymentForm />
          </div>
        )}
      </div>
    );
  }
}

export default OrderPage;
