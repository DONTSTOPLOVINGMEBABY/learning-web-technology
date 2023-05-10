//// mongoConfig.js
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()

const mongoDb = process.env.CONNECTION_STRING;

mongoose.connect(mongoDb, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

