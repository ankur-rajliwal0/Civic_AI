const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.url).then(() => {
      console.log("app is connected to database");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = ConnectDb;