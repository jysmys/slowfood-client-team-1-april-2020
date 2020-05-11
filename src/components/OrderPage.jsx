import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { getOrder } from '../modules/requestOrder';
import "../css/navbar.css";


class OrderPage extends Component {
  state = {
    orders: [],
  };

  async componentDidMount() {
    let result = await getOrder();
    this.setState({ orders: result.data.orders.order_items });
  }

  render() {
    let order
    let totalPrice = 0
    order = this.state.orders.map((order_item) => {
      totalPrice += order_item.price
      debugger
      return (
        
        <Grid.Row key={order_item.product_id} id={"order-item-" + order_item.product_id}>
          <Grid.Column  width={3} id="product-title">{order_item.title}</Grid.Column>
          <Grid.Column  width={3} id="product-price">$  {order_item.price}</Grid.Column>
        </Grid.Row>
          
      );
    });
    
    return (
      <div id='order-display'>
        <h1>Your Order:</h1><br/>
        <Grid centered id='order-grid'>{order}</Grid><br/> 
        <h5 id="total-price">Total Price: $ {totalPrice} </h5>
      </div>
    );
  }
}

export default OrderPage;
