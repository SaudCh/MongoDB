const express = require("express");
const bodyParser = require("body-parser");

// const Mongoo = require("./Mongoo");
const Mongoose = require("./mongoose");

const app = express();

app.use(bodyParser.json());

//app.get("/", Mongoo.getBirds);

//app.post("/add/bird", Mongoo.createBird);

/* mongoose */

app.post("/add/bird", Mongoose.createBird);
app.get("/", Mongoose.getBirds);

app.listen(3000);
