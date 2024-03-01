const { StatusCodes } = require("http-status-codes");

module.exports = (schema) => {
  return (req, res, next) => {
    const validation = [];
    const validateResult = schema.body.validate(req.body);
    console.log(validateResult);
    console.log(validateResult.error);
    if (validateResult.error) {
      validation.push(validateResult.error.details[0].message);
    }
    // error
    if (validation.length > 0) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: `Validation:  ${validation.join(", ")}`,
        error: StatusCodes.BAD_REQUEST,
      });
      return;
    } else {
      // next if  no errors
      next();
    }
  };
};
