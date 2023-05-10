//// app.js
const express = require("express");
const app = express();
require('./mongoConfig')

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => { res.send("hi") })

app.listen(3000, () => console.log("running"));