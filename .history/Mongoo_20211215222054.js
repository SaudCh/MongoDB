const MongoClient = require("mongodb").MongoClient;

// const url =
//   "mongodb+srv://test:Test.1234@cluster0.l7gmh.mongodb.net/birds?retryWrites=true&w=majority";

const url = "mongodb://localhost:27017/test";

const createBird = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection("birds").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();

  res.json(newProduct);
};

const getBirds = async (req, res, next) => {
  const client = new MongoClient(url);

  let birds;

  try {
    await client.connect();
    const db = client.db();
    birds = await db.collection("birds").find().toArray();
  } catch (error) {
    return res.json({ message: "Error" });
  }
  client.close();

  res.json({ birds: birds });
};

exports.createBird = createBird;
exports.getBirds = getBirds;
