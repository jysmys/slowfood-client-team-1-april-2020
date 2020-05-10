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
    orderItems: "",
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
        ? await Axios.post("/orders", { params: { product_id: id } })
        : await Axios.put(`/orders/${this.state.orderId}`, {
            params: { product_id: id },
          });
    this.setState({
      message: result.data.message,
      orderItems: result.data.order.order_items,
      orderId: result.data.order.order_id,
    });
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
            id="home-tab"
            active={activeItem === "home"}
            onClick={() => {
              this.setState({ activeItem: "home" });
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="menu"
            id="menu-tab"
            active={activeItem === "menu"}
            onClick={this.renderMenu}
          >
            Menu
          </Menu.Item>
          <Menu.Item
            name="cart"
            id="cart-tab"
            active={activeItem === "cart"}
            onClick={() => {
              this.setState({ activeItem: "cart" });
            }}
          >
            Cart ({this.state.orderItems.length})
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
