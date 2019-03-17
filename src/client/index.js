import React from "react";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

//BrowserRouter has the ability to look directly at the address Bar
ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
