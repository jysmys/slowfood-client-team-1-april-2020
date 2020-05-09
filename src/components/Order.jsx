import React from 'react';
import { Table } from "semantic-ui-react";


class Order extends Component {
  state = {
    order: [],
  };

  async componentDidMount() {
    let result = await getOrder();
    this.setState({ order: result.data.order_items });
  }

  render() {
    let order;
    order = this.state.order.map(order_item) => {
      return (
        <Table.Header>
          
        </Table.Header>
        <Table.Row

      )}
    return (
      
      <div>
        
      </div>
    )
  }
}

export default Order;