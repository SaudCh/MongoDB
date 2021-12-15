const MongoClient = require("mongodb").MongoClient;

//const url = "mongodb://localhost:27017/test";

const url =
  "mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/birds?retryWrites=true&w=majority";

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
    const result = db.collection("products").insertOne(newBird);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  //client.close();

  res.json(newBird);
};

exports.addBirds = addBirds;
exports.fetchBirds = fetchBirds;
