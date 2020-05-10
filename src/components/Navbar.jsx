import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import '../css/navbar.css';
import logo from '../images/logo.png';

export default class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header id='header' as="h1">Turtle<img src={logo} alt='logo'/></Header>
         <div id='subhead'>Food...Fast</div>
        <Menu stackable  id='menu' >
        <Menu.Item><img src={logo} alt='logo'/></Menu.Item>
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
