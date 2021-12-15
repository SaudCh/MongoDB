const { MongoClient } = require("mongodb");

//const url = "mongodb://localhost:27017/test";

const url =
  "mongodb+srv://saud:Pass.1234@cluster0.l7gmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

  client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
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
