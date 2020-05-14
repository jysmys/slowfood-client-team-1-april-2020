import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import Axios from "axios";

import { getMenu } from "../modules/requestProducts";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import HomePage from "./HomePage";
import "../css/navbar.css";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = {
    activeItem: "home",
    menu: [],
    message: "",
    orderItems: [],
    orderItemsCount: 0,
    orderId: "",
  };

  renderMenu = async () => {
    let result = await getMenu();
    this.setState({
      menu: result.data.products,
      activeItem: "menu",
    });
  };

  addToOrder = async (event) => {
    let id = event.target.parentElement.parentElement.dataset.id;
    let result =
      this.state.orderId === ""
        ? await Axios.post("/orders", { product_id: id })
        : await Axios.put(`/orders/${this.state.orderId}`, { product_id: id });
    let productsAmount = result.data.order.products
      .map((product) => product["amount"])
      .reduce((a, b) => a + b, 0);
    this.setState({
      message: result.data.message,
      orderItems: result.data.order.products,
      orderItemsCount: productsAmount,
      orderId: result.data.order.id,
    });
  };



  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header id="header" as="h1">
          Turtle
          <img src={logo} alt="logo" />
        </Header>
        <div id="subhead">Food...Fast</div>
        <Menu stackable id="menu">
          <Menu.Item key="logo">
            <img src={logo} alt="logo" />
          </Menu.Item>
          <Menu.Item
            key="home"
            name="home"
            id="home-tab"
            active={activeItem === "home"}
            onClick={() => {
              this.setState({ activeItem: "home" });
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="menu"
            name="menu"
            id="menu-tab"
            active={activeItem === "menu"}
            onClick={this.renderMenu}
          >
            Menu
          </Menu.Item>
          <Menu.Item
            key="cart"
            position="right"
            name="cart"
            id="cart-tab"
            active={activeItem === "cart"}
            onClick={() => {
              this.setState({ activeItem: "cart" });
            }}
          >
            Cart ({this.state.orderItemsCount})
          </Menu.Item>
        </Menu>
        {activeItem === "menu" && (
          <MenuPage
            menu={this.state.menu}
            message={this.state.message}
            addToOrder={this.addToOrder}
          />
        )}
        {activeItem === "cart" && <OrderPage />}
        {activeItem === "home" && <HomePage />}
      </Container>
    );
  }
}
