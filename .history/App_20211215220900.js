const express = require("express");
const bodyParser = require("body-parser");
const Mongoo = require("./Mongoo");

const app = express();

app.use(bodyParser.json());

app.get("/", Mongoo.getBirds);

app.post("/add/bird", Mongoo.createBird);

app.listen(3000);
