import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "http://localhost:3000/api/v1";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
