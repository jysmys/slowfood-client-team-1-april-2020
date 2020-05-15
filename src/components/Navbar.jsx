import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import Axios from "axios";

import { getMenu } from "../modules/requestProducts";
import MenuPage from "./MenuPage";
import OrderPage from "./OrderPage";
import HomePage from "./HomePage";
import "../css/navbar.css";
import logo from "../images/logo.png";
import PaymentForm from "./PaymentForm";

export default class Navbar extends Component {
  state = {
    activeItem: "home",
    menu: [],
    message: "",
    orderItems: [],
    orderId: "",
    orderPrice: 0,
    orderTotal: 0,
    showPaymentForm: false,
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
    this.setState({
      message: result.data.message,
      orderItems: result.data.order.products,
      orderId: result.data.order.id,
      orderPrice: result.data.order.order_total,
      orderTotal: result.data.order.total,
    });
    // debugger;
  };

  finalizedOrder = async (message) => {
    let orderTotal = this.state.orderItems.order_total;
    this.setState({
      message: { id: 0, message: message },
      orderTotal: orderTotal,
      orderItems: [],
      showPaymentForm: false,
    });
  };
  render() {
    const {
      activeItem,
      showPaymentForm,
      menu,
      message,
      orderItems,
      orderPrice,
      orderTotal,
    } = this.state;

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
            Cart ({orderTotal})
          </Menu.Item>
        </Menu>
        {activeItem === "menu" && (
          <MenuPage
            menu={menu}
            message={message}
            addToOrder={this.addToOrder}
          />
        )}
        {activeItem === "cart" && (
          <OrderPage
            onButtonConfirmOrder={() => {
              this.setState({ showPaymentForm: true });
            }}
            orderItems={orderItems}
            orderPrice={orderPrice}
            orderTotal={orderTotal}
          />
        )}
        {activeItem === "home" && <HomePage />}
        {showPaymentForm && (
          <div id="payment-form">
            <PaymentForm
              orderItems={orderItems}
              finalizeOrder={this.finalizeOrder(this)}
            />
          </div>
        )}
      </Container>
    );
  }
}
