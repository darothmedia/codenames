import React from "react";
import { render } from "react-dom";
import App from "../components/App";
import configureStore from "../channels/store"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()
  render(
    <App store={store} />,
    document.body.appendChild(document.createElement("div"))
  );
});
