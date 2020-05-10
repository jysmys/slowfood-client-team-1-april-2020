import React from "react";
import Menu from "./components/Menu";
import { Container, Header } from "semantic-ui-react";
import OrderPage from "./components/OrderPage";

const App = () => {
  return (
    <Container>
      <Header as="h1">Turtle - Food fast</Header>
      <Menu />
      <OrderPage />
    </Container>
  );
};

export default App;
