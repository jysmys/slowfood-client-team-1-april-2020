import React from "react";
import logo from "../images/logo.png";
import { Grid } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Grid>
      <Grid.Row centered id="imgIcon">
        <img src={logo} alt="logo" width="350" height="350" />
      </Grid.Row>
      <Grid.Row centered id="Openhours">
        <h5>Open: 10.00am - 10.30pm </h5>
      </Grid.Row>
      <Grid.Row centered id="ContactInfo">
        <p>
          Phone: 0707 - 707070 <br /> Mail: turtlefood@mail.com <br /> Adress:
          7070 Sunnyside Road <br />
        </p>
      </Grid.Row>
    </Grid>
  );
}
