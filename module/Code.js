let mongoose = require("mongoose");

let codeSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Code", codeSchema);
