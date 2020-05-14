import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import App from "./App";
import { StripeProvider } from "react-stripe-elements";

// axios.defaults.baseURL = "https://turtle-food-fast.herokuapp.com/api/v1";
axios.defaults.baseURL = "http://localhost:3000/api/v1";

ReactDOM.render(
  // <StripeProvider stripe="pk_test_ScTlKvcm1zmjvc68RJN3ME1E00RUevmnpL">
  <App />,
  // </StripeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
