const express = require("express");
const app = express();
const dotenv = require("dotenv");

const mockData = require("./data/mockData.js");

dotenv.config();

const port = process.env.PORT || 4005;
let runningMessage =
  "Server is up and running on port, is this working? nope " + port;

app.get("/", (req, res) => {
  console.log("API was successfully requested");
  res.send(runningMessage);
});

// list products from the mockData
app.get("/api/products", (req, res) => {
  res.send(mockData);
});

app.get("/api/products/:id", (req, res) => {
  res.send(mockData.filter((product) => product._id === req.params.id));
});

const server = app.listen(port, () => {
  console.log(runningMessage);
});

module.exports = server;
