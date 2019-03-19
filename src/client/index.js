import React from "react";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import combinedReducers from "../redux/reducers";
import { renderRoutes } from "react-router-config";
// inorder to handle async await in the work env use babel polyfill
import "babel-polyfill";

const store = createStore(
  combinedReducers,
  window.INITIAL_DATA,
  applyMiddleware(thunk)
);

//BrowserRouter has the ability to look directly at the address Bar
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
