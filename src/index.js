import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import STORE from "./store/store";
import App from "./components/UI/app/app";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);