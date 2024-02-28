const User = require("../schema/user.schema");
// const User = require("../model/user.model");

// get all users
const getAllUsers = async (req, res) => {
  // const user = new User({});
  const users = await User.find({});
  res.json({ message: "All users", data: users });
};

// get a specific user

// findOne is used to find a single document, && returns the document itself or null
// while find is used to find multiple documents. && returns an array of documents or an empty array.

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    // const user = await User.findOne({ _id: id });  // => single user or null
    const user = await User.find({ _id: id }); // => all documents to get first one array[0] of index = 0 or an empty array

    res.json({ message: "get  user by ID", data: user });
  } catch (error) {
    res.json({ message: "Error  getting the user", error: error });
  }
};

// add new user
const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    await newUser.save();
    res.json({ message: "User added successfully", data: newUser });
  } catch (error) {
    res.json({ message: "Error in adding the user ", error });
  }

  //******** another way to add a user *****/
  // try {
  //   const users = await User.insertMany({ name, email, password });
  //   res.json({ message: "add new user success" });
  // } catch (error) {
  //   res.json({ message: "Error when adding a new user", ...error });
  // }
};

//delete user
const deleteUser = async (req, res) => {
  let { id } = req.params;

  try {
    // const user = await User.deleteMany({ name: /ahmed/i }); //=> delete all Ahmed
    const user = await User.deleteOne({ _id: id });
    res.json({ message: "Deleted Success" });
  } catch (error) {
    res.json({ message: "Delete Failed", error });
  }
};

// update user
const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  try {
    const user = await User.updateOne({ _id: id }, { name: name });
    res.json({ message: "updated success", user });
  } catch (error) {
    res.json({ message: "Update failed", error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addNewUser,
  deleteUser,
  updateUser,
};

const User = require("../schema/user.schema");
// const User = require("../model/user.model");

// get all users
const getAllUsers = async (req, res) => {
  // const user = new User({});
  const users = await User.find({});
  res.json({ message: "All users", data: users });
};

// get a specific user

// findOne is used to find a single document, && returns the document itself or null
// while find is used to find multiple documents. && returns an array of documents or an empty array.

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    // const user = await User.findOne({ _id: id });  // => single user or null
    const user = await User.find({ _id: id }); // => all documents to get first one array[0] of index = 0 or an empty array

    res.json({ message: "get  user by ID", data: user });
  } catch (error) {
    res.json({ message: "Error  getting the user", error: error });
  }
};

// add new user
const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    await newUser.save();
    res.json({ message: "User added successfully", data: newUser });
  } catch (error) {
    res.json({ message: "Error in adding the user ", error });
  }

  //******** another way to add a user *****/
  // try {
  //   const users = await User.insertMany({ name, email, password });
  //   res.json({ message: "add new user success" });
  // } catch (error) {
  //   res.json({ message: "Error when adding a new user", ...error });
  // }
};

//delete user
const deleteUser = async (req, res) => {
  let { id } = req.params;

  try {
    // const user = await User.deleteMany({ name: /ahmed/i }); //=> delete all Ahmed
    const user = await User.deleteOne({ _id: id });
    res.json({ message: "Deleted Success" });
  } catch (error) {
    res.json({ message: "Delete Failed", error });
  }
};

// update user
const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  try {
    const user = await User.updateOne({ _id: id }, { name: name });
    res.json({ message: "updated success", user });
  } catch (error) {
    res.json({ message: "Update failed", error });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  addNewUser,
  deleteUser,
  updateUser,
};
