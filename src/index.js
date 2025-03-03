import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./Global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/ProductStore";

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
