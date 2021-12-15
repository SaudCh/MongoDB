const { MongoClient } = require("mongodb");

//const url = "mongodb://localhost:27017/test";

const url = "mongodb://localhost:27017/test";

const fetchBirds = async (req, res, next) => {};

const addBirds = async (req, res, next) => {
  const newBird = {
    name: req.body.name,
    price: req.body.price,
  };
  //const client = new MongoClient(url);
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newBird);
  } catch (error) {
    return res.json({ message: "Could not store data.", error: error });
  }
  client.close();

  res.json(newBird);
};

exports.addBirds = addBirds;
exports.fetchBirds = fetchBirds;
