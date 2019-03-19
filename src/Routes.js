import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/components/Home";
import Users from "./client/components/Users";


// Routes Mapping

export default [
  {
   ...Home,
   path: '/', 
   exact: true,
  },
  {
    ...Users,
    path: '/users', 
  }
]
