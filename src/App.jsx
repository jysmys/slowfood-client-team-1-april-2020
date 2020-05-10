import React from "react";
import Menu from "./components/Menu";
import { Container, Header } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Header as="h1">Turtle - Food fast</Header>
      <Menu />
    </Container>
  );
};

export default App;
