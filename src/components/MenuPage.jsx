import React from "react";
import { Grid, Button, Container } from "semantic-ui-react";

const MenuPage = ({ menu, message, addToOrder }) => {
  let showMessage
  if (message) {
    showMessage = <p id="success-message">{message}</p>;
  }

  let showMenu = menu.map((product) => {
    return (
      <Container id='menu-container'>
        {cartTab}
        {message}
        <h1>Menu</h1>
        <Grid celled>{menu}</Grid>
      </Container>
      <Grid.Row
        key={product.id}
        data-id={product.id}
        id={"product-" + product.id}
      >
        <Grid.Column width={4} id="product-title">
          {product.title}
        </Grid.Column>
        <Grid.Column width={6} id="product-description">
          {product.description}
        </Grid.Column>
        <Grid.Column width={3} id="product-price">
          {product.price} $
        </Grid.Column>
        <Grid.Column width={3}>
          <Button onClick={(event) => {addToOrder(event)}} id="add-to-order">
            Add to Order
          </Button>
        </Grid.Column>
      </Grid.Row>
    );
  })

  return (
    <Container>
      {showMessage}
      <h1>Menu</h1>
      <Grid celled>
        {showMenu}
      </Grid>
    </Container>
  );
}


export default MenuPage;
