import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { getOrder } from '../modules/requestOrder';


class Order extends Component {
  state = {
    order: [],
  };

  async componentDidMount() {
    let result = await getOrder();
    this.setState({ order: result.data.order_items });
  }

  render() {
    let order; //THIS NEEDS LOOKING AT, THE MAP FUNCTION NEEDS TO REACH THE ARRAY IN THE OBJECT IN THE ARRAY!!
    order = this.state.order.map((order_items) => {
      return (
        <Table.Row key={order_items.id} id={"order-item-" + order_items.id}>
          <Table.Cell id="order-item-product-title">{order_items.product.title}</Table.Cell>
          <Table.Cell id="order-item-product-price">$ {order_items.product.price}</Table.Cell>
        </Table.Row>
      );
    });
    
    return (
      <div>
        <Table unstackable>
          <Table.Header>
            <Table.HeaderCell>Your Order:</Table.HeaderCell>
          </Table.Header>
          <Table.Body>{order}</Table.Body>
          <Table.Footer>
            <Table.Footer.Cell>
              Your Order Total: {order.total_price}
            </Table.Footer.Cell>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

export default Order;
