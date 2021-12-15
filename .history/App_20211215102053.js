const express = require("express");
const bodyParser = require("body-parser");
const Mongoo = require("./Mongoo");

const app = express();

app.use(bodyParser.json());

app.get("/", Mongoo.createProduct);

app.post("/add/bird", Mongoo.createProduct);

app.listen(3000);
