import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import "../css/navbar.css";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = { activeItem: "home", itemCount: 0 };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateItemCount = (itemCount) => {
    this.setState({ itemCount: itemCount });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header id="header" as="h1">
          Turtle
          <br />
          <span id="subhead">Food...Fast</span>
        </Header>
        <Menu stackable id="menu">
          <Menu.Item>
            <img src={logo} alt="logo" />
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
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
            Cart ({this.state.itemCount})
          </Menu.Item>
        </Menu>
        {activeItem === "menu" && (
          <MenuPage itemCount={this.updateItemCount()} />
        )}
        {activeItem === "cart" && <OrderPage />}
      </Container>
    );
  }
}
