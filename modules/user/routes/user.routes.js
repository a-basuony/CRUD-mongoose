const {
  getAllUsers,
  addNewUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

const validateRequest = require("../../../common/validateRequest");
const { addUserSchema } = require("../joi/userValidation");

const router = require("express").Router();

router.get("/users", getAllUsers);
router.get("/getUser/:id", getUser);
router.post("/addNewUser", validateRequest(addUserSchema), addNewUser);
router.delete("/delete/:id", deleteUser);
router.patch("/updateUser/:id", updateUser);

module.exports = router;

// PUT => Used to completely update or replace an existing resource with the request payload.
// PATCH => Used to partially (some of data not completely) update or replace a resource with the request payload. It is used to set only specific fields of a resource.
