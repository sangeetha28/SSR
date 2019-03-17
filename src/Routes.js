import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/components/Home";

// Routes Mapping

export default () => {
  return (
    <div>
      {" "}
      <Route exact path="/" component={Home} />
    </div>
  );
};
