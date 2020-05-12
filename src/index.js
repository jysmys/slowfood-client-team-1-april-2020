import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "https://turtle-food-fast.herokuapp.com/api/v1";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
