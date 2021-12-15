const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/birds?retryWrites=true&w=majority";

const createBird = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

const getBirds = async (req, res, next) => {};

exports.createBird = createBird;
exports.getBirds = getBirds;
