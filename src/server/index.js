import express from "express";
import renderer from "../helper/renderer";
import getStore from "../helper/reduxStore";
import "babel-polyfill";
import Routes from "../Routes";
import { matchRoutes } from "react-router-config";

//route Handler
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = getStore();
  // will give the respective Route object
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises)
    .then(() => {
      res.send(renderer(req, store));
    })
    .catch(err => console.log(err));
  //converts React Component to a HTML file and renders it to the client during initial request
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

// 1. use react-router-config and remove any JSX classic routes config
// 2.  plugin renderRoutes in server and Client
// 3. don't render the app in the server until all the data fetching is completed
