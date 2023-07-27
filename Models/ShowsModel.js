const mongoose = require("mongoose");
const ShowsSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  genre: { type: String },
  release_date: { type: Date },
  director: { type: String },
  actor_1: { type: String },
  actor_2: { type: String },
  actor_3: { type: String },
  rating: { type: Number },
  duration: { type: Number },
  language: { type: String },
});

const ShowsModel = mongoose.model("show", ShowsSchema, "shows");
module.exports = ShowsModel;
