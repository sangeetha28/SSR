import express from "express";
import renderer from "../helper/renderer";
import getStore from "../helper/reduxStore";
import "babel-polyfill";

//route Handler
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = getStore();
  //converts React Component to a HTML file and renders it to the client during initial request
  res.send(renderer(req,store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
