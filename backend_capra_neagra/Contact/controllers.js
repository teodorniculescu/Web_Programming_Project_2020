const express = require("express");
const Service = require("./services.js");
const { validateFields } = require("../utils");
const { authorizeAndExtractToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { authorizeRoles } = require("../security/Roles");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const books = await Service.getAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { message, from_id } = req.body;
  try {
    console.log(from_id);
    const fieldsToBeValidated = {
      message: {
        value: message,
        type: "ascii",
      },
      from_id: {
        value: from_id,
        type: "int",
      },
    };
    validateFields(fieldsToBeValidated);
    await Service.postQuestion(message, from_id);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

router.put(
  "/togglevalid/:id",
  authorizeAndExtractToken,
  authorizeRoles("admin", "suport"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const fieldsToBeValidated = {
        id: {
          value: id,
          type: "ascii",
        },
      };
      validateFields(fieldsToBeValidated);
      console.log("ce plm");
      await Service.toggleValid(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/answer/:id",
  authorizeAndExtractToken,
  authorizeRoles("admin", "suport"),
  async (req, res, next) => {
    const { id } = req.params;
    const { answer } = req.body;
    try {
      const fieldsToBeValidated = {
        id: {
          value: id,
          type: "ascii",
        },
        answer: {
          value: answer,
          type: "ascii",
        },
      };
      validateFields(fieldsToBeValidated);
      await Service.putAnswer(id, answer);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
