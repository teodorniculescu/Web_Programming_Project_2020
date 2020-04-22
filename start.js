const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const express = require("express");
const mariadb = require("mariadb");

const app = express();
/*
const pool = mariadb.createPool({
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  port: process.env.MARIADB_PORT,
  socketPath: "/var/run/mysqld/mysqld.sock",
  connectionLimit: 5,
});
*/

console.log(process.env.MARIADB_USER);

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "itisoveranakin",
  port: 3306,
  connectionLimit: 5,
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); //[ {val: 1}, meta: ... ]
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

console.log("de ce plang chitarele");
asyncFunction();
console.log("woah");

app.listen(3000);
