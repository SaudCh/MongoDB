const mongoDb = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/test";

const fetchBirds = async (req, res, next) => {};

const addBirds = async (req, res, next) => {
  const newBird = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("Parrorts").insertOne(newBird);
  } catch (error) {
    return res.json({ messgae: "Error!!" });
  }
  client.close();

  res.join();
};

exports.addBirds = addBirds;
exports.fetchBirds = fetchBirds;
