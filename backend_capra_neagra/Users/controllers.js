const express = require("express");
const Service = require("./services.js");
const { validateFields } = require("../utils");

const router = express.Router();

function validateUsernameAndPassword(username, password) {
  const fieldsToBeValidated = {
    username: {
      value: username,
      type: "alpha",
    },
    password: {
      value: password,
      type: "ascii",
    },
  };
  validateFields(fieldsToBeValidated);
}

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    validateUsernameAndPassword(username, password);
    await Service.register(username, password);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    validateUsernameAndPassword(username, password);
    const token = await Service.login(username, password);
    res.status(200).json(token);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
