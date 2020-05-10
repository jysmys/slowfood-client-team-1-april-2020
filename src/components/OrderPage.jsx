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
    let order; 
    order = this.state.orders.map((order_item) => {
      return (  
        <Table.Row key={order_item.product_id} id={"order-item-" + order_item.product_id}>
          <Table.Cell id="product-title">{order_item.title}</Table.Cell>
          <Table.Cell id="product-price">$ {order_item.price}</Table.Cell>
        </Table.Row>
      );
    });
    
    return (
      <div>
        {order}
      </div>
    );
  }
}

export default OrderPage;
