const mongoose = require("mongoose");

const ComplainSchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Complain = mongoose.model("Complain", ComplainSchema);

module.exports = Complain;
