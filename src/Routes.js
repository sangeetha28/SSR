import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/components/Home";
import Users from "./client/components/Users";

// Routes Mapping

export default () => {
  return (
    <div>
      {" "}
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </div>
  );
};
