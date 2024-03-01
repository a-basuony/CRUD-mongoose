const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// userSchema.pre("find", function () {
//   //  this is a hook that runs before the find method (findOne, deleteOne, etc.)
//   // console.log(`before find ***** ${new Date()}`);
// });

// userSchema.post("find", function () {
//   //this is another hook that runs after the find method
//   // console.log(`after find ***** ${new Date()}`);
// });

// to hash password before store it in DB
userSchema.pre("save", async function (next) {
  // this in arrow function the parent if not the
  // this in regular function return on class userSchema
  console.log(`pre hash password`);
  this.password = await bcrypt.hash(this.password, 10);
  next();
  console.log(`pre hash password`);
});

const User = mongoose.model("User", userSchema); // take collection name and schema

module.exports = User;

// password  encryption and hashing
//  hash => not allowed to convert it as  string because of security reasons
//  encryption = hashing + decryption
//  when we save data in database we  need to encrypt it first then store it into db
//  when we retrieve data from db we will use decryption technique to get original data back

// password => hash (encrypt) => save in DB =>  when register
// if he want to login password => i will hash it => compare  both hashed passwords are same or not?
// {with his account password then compare encrypted value with saved one}

// we will use bcrypt to hash password
