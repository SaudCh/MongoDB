const res = require("express/lib/response");
const mongoose = require("mongoose");

const Product = require("./Models/Birds");

const createProduct = async (req, res, next) => {
  const createdBird = new Product({
    name: req.body.name,
    price: req.body.price,
  });
};

exports.createProduct = createProduct;
