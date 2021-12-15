const mongoDb = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/test";

const fetchBirds = async (req, res, next) => {};

const addBirds = async (req, res, next) => {};

exports.addBirds = addBirds;
exports.fetchBirds = fetchBirds;
