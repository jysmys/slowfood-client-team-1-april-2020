import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";

export default class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header as="h1">Turtle - Food fast</Header>
        <Menu stackable>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item
            name="menu"
            active={activeItem === "menu"}
            onClick={this.handleItemClick}
          >
            Menu
          </Menu.Item>
          <Menu.Item
            name="cart"
            active={activeItem === "cart"}
            onClick={this.handleItemClick}
          >
            Cart
          </Menu.Item>
        </Menu>
        {activeItem === "menu" && <MenuPage />}
        {activeItem === "cart" && <OrderPage />}
      </Container>
    );
  }
}
