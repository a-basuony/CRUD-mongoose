const Joi = require("joi");

module.exports = {
  // add user schema
  addUserSchema: {
    // req.body
    body: Joi.object()
      .required()
      .keys({
        name: Joi.string().required().messages({
          "String.empty": "Name cannot be an empty field",
        }),
        email: Joi.string().email().required().messages({
          "String.email": "Email  must be a valid email address",
        }),
        password: Joi.string().required(),
        //   .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        role: { type: Number }, //
        verified: { type: Boolean, default: false }, //
      }),
  },

  //update user schema
  updateUserSchema: {
    params: Joi.object().required().keys({
      id: Joi.string(),
    }),
    body: Joi.object().required().keys({
      name: Joi.string().required(),
    }),
  },
};
