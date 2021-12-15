const res = require("express/lib/response");
const mongoose = require("mongoose");

const Bird = require("./Models/Birds");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const createBird = async (req, res, next) => {
  const createdBird = new Bird({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdBird.save();

  res.json({ birds: result });
};

exports.createBird = createBird;
