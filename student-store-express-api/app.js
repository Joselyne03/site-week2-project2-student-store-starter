// YOUR CODE HERE
//ask if you need to add the 
//imports here:
const express = require("express");
const morgan = require("morgan");
const productModel = require("./model/Store");

//the middleware here
const app = express();
app.use(morgan("dev"));
app.use(express.json());

//the routes here
app.get("/", (request,response) => {
    response.status(200)
  })

app.get("/store", (request,response) => {
    const productsList = productModel.getAllProducts();
    response.json(productsList)
});

//export app
module.exports = app;