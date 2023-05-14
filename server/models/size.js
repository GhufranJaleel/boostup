const Mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { Schema } = Mongoose;
const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};
Mongoose.plugin(slug, options);

// Size Schema
const SizeSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Size", SizeSchema);
