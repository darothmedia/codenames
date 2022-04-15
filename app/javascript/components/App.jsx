import React from "react";
import Routes from "../routes/Index";
import { Provider } from "react-redux";

export default ({store}) => (
  <Provider store={store}>
    {Routes}
  </Provider>
);
