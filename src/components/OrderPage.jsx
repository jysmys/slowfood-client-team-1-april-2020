import React from "react";
import { Grid, Button } from "semantic-ui-react";
import "../css/navbar.css";

const OrderPage = (props) => {
  let order;
  let showOrder;
  // debugger;
  order = props.orderItems.map((item, index) => {
    return (
      <Grid.Row key={index} id={"order-item-" + index}>
        <Grid.Column textAlign="right" width={3} id="product-amount">
          {item.amount}
        </Grid.Column>
        <Grid.Column width={3} id="product-title">
          {item.title}
        </Grid.Column>
        <Grid.Column width={3} id="product-price">
          $ {item.price}
        </Grid.Column>
      </Grid.Row>
    );
  });

  showOrder =
    props.orderTotal === 0 ? (
      <div>
        <Grid centered id="noting-in-order">
          Put Some tasty food in your basket first!
        </Grid>
      </div>
    ) : (
      <div id="order-display">
        <h1>Your Order:</h1>
        <br />
        <Grid centered id="order-grid">
          {order}
        </Grid>
        <br />
        <h3 id="total-price">Total Price: $ {props.orderPrice} </h3>
        <Button id="confirm-order" onClick={props.onButtonConfirmOrder}>
          Confirm order
        </Button>
      </div>
    );
  return <>{showOrder}</>;
};
export default OrderPage;
