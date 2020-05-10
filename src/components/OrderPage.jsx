import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { getOrder } from '../modules/requestOrder';


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
      return (  
        <Table.Row key={order_item.product_id} id={"order-item-" + order_item.product_id}>
          <Table.Cell id="product-title">{order_item.title}</Table.Cell>
          <Table.Cell id="product-price">$ {order_item.price}</Table.Cell>
        </Table.Row>
      );
    });
    
    return (
      <div id='order-display'>
        {order}
        <p id="total-price">Total Price: {totalPrice} </p>
      </div>
    );
  }
}

export default OrderPage;
