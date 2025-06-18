const mongoose = require("mongoose");

const timeLogSchema = new mongoose.Schema({
  url: String,
  duration: Number,
  date: Date
});

module.exports = mongoose.model("TimeLog", timeLogSchema);
