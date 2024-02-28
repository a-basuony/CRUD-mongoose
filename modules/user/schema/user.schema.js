const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema); // take collection name and schema

module.exports = User;

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
//   },
//   {
//     timestamps: true, // Automatically create createdAt and updatedAt fields.
//   }
// );

// module.exports = userSchema;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema); // take collection name and schema

module.exports = User;

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
//   },
//   {
//     timestamps: true, // Automatically create createdAt and updatedAt fields.
//   }
// );

// module.exports = userSchema;
