const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      code: { type: String, required: true },
      quantity: { type: Number, required: true },
      publishYr: { type: Number, required: true },
      language: { type: String, required: true },
      category: { type: String, required: true },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Book", bookSchema);

