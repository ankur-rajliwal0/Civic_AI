const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const ConnectDb = require("./db/Connectdb.js");
const router = require("./Controllers/Complain/AddComplain.js");
// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("api/v1", router);

// database
ConnectDb();

// server
app.listen(4000, () => {
  console.log("app is running on http://localhost:4000");
});
