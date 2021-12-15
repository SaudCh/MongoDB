const res = require("express/lib/response");
const mongoose = require("mongoose");

const Product = require("./Models/Birds");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const createProduct = async (req, res, next) => {
  const createdBird = new Product({
    name: req.body.name,
    price: req.body.price,
  });
};

exports.createProduct = createProduct;
