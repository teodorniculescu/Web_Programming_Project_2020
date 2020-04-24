const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const express = require("express");
const mariadb = require("mariadb");

const app = express();

const pool = mariadb.createPool({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  port: process.env.MARIADB_PORT,
  connectionLimit: 5,
});

app.listen(process.env.PORT, () => {
  console.log(`Backend listening on port ${process.env.PORT}.`);
});
