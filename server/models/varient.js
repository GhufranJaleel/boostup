const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Varient Schema
const VarientSchema = new Schema({
  //   color: {
  //     type: Schema.Color.ObjectId,
  //     ref: "Color",
  //     default: null,
  //   },
  //   storage: {
  //     type: Schema.Color.ObjectId,
  //     ref: "Color",
  //     default: null,
  //   },
  //   condition: {
  //     type: Schema.Condition.ObjectId,
  //     ref: "Condition",
  //     default: null,
  //   },
  //   ram: {
  //     type: Schema.Ram.ObjectId,
  //     ref: "Ram",
  //     default: null,
  //   },
  size: {
    type: Schema.Size.ObjectId,
    ref: "Size",
    default: null,
  },
  //   network: {
  //     type: Schema.Network.ObjectId,
  //     ref: "Network",
  //     default: null,
  //   },

  imageUrl: {
    type: String,
  },
  imageKey: {
    type: String,
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

module.exports = Mongoose.model("Varient", VarientSchema);
