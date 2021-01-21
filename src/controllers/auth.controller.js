const { validate } = require("../models/user.model");
const AuthServ = require("../services/auth.service");
const CustomError = require("../utils/custom-error");
const response = require("../utils/response");
const { regValidation, loginValidation } = require("../validators/auth.validator");

class AuthContoller {
  async signup(req, res, next) {
    
    // Joi checks User Input
    const validateInput = regValidation.validate(req.body)
    if (validateInput.error) {
     throw new CustomError(validateInput.error.message, 401)}

    const result = await AuthServ.signup(req.body);
    res.status(201).send(response("User created", result));
  }

  async signin(req, res) {
    //Joi checks User Input
    const validateInput = loginValidation.validate(req.body)
    if (validateInput.error) {
     throw new CustomError(validateInput.error.message, 401)}

    const result = await AuthServ.signin(req.body);
    res.status(200).send(response("User login successful", result));
  }

  async updatePassword(req, res) {
    const result = await AuthServ.updatePassword(req.params.userId, req.body);
    res.status(200).send(response("Password updated", result));
  }

  async RequestEmailVerification(req, res) {
    const result = await AuthServ.RequestEmailVerification(req.query.email);
    res.status(200).send(response("Email verfication link sent", result));
  }

  async VerifyEmail(req, res) {
    const result = await AuthServ.VerifyEmail(req.query);
    res.status(200).send(response("Email verified successfully", result));
  }

  async RequestPasswordReset(req, res) {
    const result = await AuthServ.RequestPasswordReset(req.query.email);
    res.status(200).send(response("Password reset link sent", result));
  }
  async resetPassword(req, res) {
    const result = await AuthServ.resetPassword(req.body);
    res.status(200).send(response("Password updated", result));
  }
}

module.exports = new AuthContoller();