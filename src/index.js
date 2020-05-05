import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.default.baseURL="https://localhost:4000/api/v1"
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
