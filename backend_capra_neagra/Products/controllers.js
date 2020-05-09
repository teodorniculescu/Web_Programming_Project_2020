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

module.exports = router;
