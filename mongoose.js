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

const getBirds = async (req, res, next) => {
  const birds = await Bird.find().exec();
  res.json({ birds: birds });
};

exports.createBird = createBird;
exports.getBirds = getBirds;
