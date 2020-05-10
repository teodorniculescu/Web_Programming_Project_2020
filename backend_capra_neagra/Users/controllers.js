const express = require("express");
const Service = require("./services.js");
const { validateFields } = require("../utils");
const router = express.Router();
const { authorizeAndExtractToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { authorizeRoles } = require("../security/Roles");

router.post("/register/request", async (req, res, next) => {
  const { username, password, name, email } = req.body;
  try {
    const fieldsToBeValidated = {
      username: {
        value: username,
        type: "alpha",
      },
      password: {
        value: password,
        type: "ascii",
      },
      name: {
        value: password,
        type: "ascii",
      },
      email: {
        value: email,
        type: "email",
      },
    };
    validateFields(fieldsToBeValidated);
    await Service.register_request(username, password, name, email);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

router.post("/register/confirm", async (req, res, next) => {
  const id = req.query.id;
  const rnd = req.query.rnd;
  try {
    const result = await Service.register_confirm(id, rnd);
    res.status(201).send(`${result}`);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const fieldsToBeValidated = {
      username: {
        value: username,
        type: "ascii",
      },
      password: {
        value: password,
        type: "ascii",
      },
    };
    validateFields(fieldsToBeValidated);
    const token = await Service.login(username, password);
    res.status(200).json(token);
  } catch (err) {
    next(err);
  }
});

router.get(
  "/dataperm/:id",
  authorizeAndExtractToken,
  authorizeRoles("admin", "user", "suport"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Service.getDataPerm(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/",
  authorizeAndExtractToken,
  authorizeRoles("admin"),
  async (req, res, next) => {
    try {
      const data = await Service.getAll();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
