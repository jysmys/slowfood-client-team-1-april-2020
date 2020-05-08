import React from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import { getMenu } from "../modules/requestProducts";
import { Component } from "react";
import Axios from "axios";

class Menu extends Component {
  state = {
    menu: [],
    message: "",
  };

  async componentDidMount() {
    let result = await getMenu();
    this.setState({ menu: result.data.products });
  }

  addToOrder = async (event) => {
    let id = event.target.parentElement.dataset.id;
    let result = await Axios.post("/orders", {
      id: id
    });
    this.setState({ message: { id: id, message: result.data.message } });
    debugger
  };
  
  render() {
    let menu;
    menu = this.state.menu.map((product) => {
      return (
        <Grid.Row key={product.id} data-id={product.id} id={"product-" + product.id}>
          <Grid.Column width={4} id="product-title">{product.title}</Grid.Column>
          <Grid.Column width={6} id="product-description">
            {product.description}
          </Grid.Column>
          <Grid.Column width={3} id="product-price">{product.price} $</Grid.Column>
          <Grid.Column width={3}>
             <Button onClick={this.addToOrder} id="add-to-order">
              Add to Order
            </Button>
          </Grid.Column>
        </Grid.Row>
      );
    });
    let message
    if (this.state.message) {
      message = <div>{this.state.message}</div>
    }

    return (
      <Container>
        {message}
        <h1>Menu</h1>
        <Grid celled>{menu}</Grid>
      </Container>
    );
  }
}

export default Menu;
