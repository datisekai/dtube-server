const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("types", TypeSchema);
