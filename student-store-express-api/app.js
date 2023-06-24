// YOUR CODE HERE
//ask if you need to add the 
//imports here:
const express = require("express");
const morgan = require("morgan");
const productModel = require("./model/Store");
var cors = require('cors')

//the middleware here
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//the routes here
app.get("/", (request,response) => {
    response.status(200).json({ ping: "pong" });
  })

app.get("/store", (request,response) => {
    const productsList = productModel.getAllProducts();
    response.json(productsList)
});
app.get("/store/:productId" , (request,response) => {
  const id = request.params.productId;
  const product = productModel.getProductById(parseInt(id));
  if (!product) {
   response.status(404).json({message : "product not found"});
  }else {
  response.status(200).json({product})
  }
})

module.exports = app;