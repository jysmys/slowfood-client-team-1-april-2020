import React from "react";
import { Table } from "semantic-ui-react";
import { getMenu } from "../modules/menu";
import { Component } from "react";

class ViewMenu extends Component {
  state = {
    menu: [],
  };
  componentDidMount() {
    this.getViewMenu();
  }
  async getViewMenu() {
    let result = await getMenu();
    this.setState({ menu: result.data.products });
  }
  render() {
    let menu;
    if (this.state.menu != null) {
      menu = this.state.menu.map((product) => {
        return (
          <Table.Row key={product.id}>
            <Table.Cell>{product.title}</Table.Cell>
            <Table.Cell>{product.description}</Table.Cell>
            <Table.Cell>{product.price} $</Table.Cell>
            <Table.Cell>
              <button id="minus">-</button>
            </Table.Cell>
            <Table.Cell id="numberOfItems">0</Table.Cell>
            <Table.Cell>
              <button id="plus">+</button>
            </Table.Cell>
            <Table.Cell>
              <button id="add">Add</button>
            </Table.Cell>
          </Table.Row>
        );
      });
    } else {
      menu = (
        <Table.Row id="menumessage">
          Nothing on the menu at the moment
        </Table.Row>
      );
    }

    return (
      <div>
        <h1>Menu</h1>
        <Table unstackable>
          <Table.Body>{menu}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default ViewMenu;
