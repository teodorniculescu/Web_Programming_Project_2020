const { ServerError } = require("../errors");
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  port: process.env.MARIADB_PORT,
  database: process.env.MARIADB_DATABASE,
  connectionLimit: 5,
});

const query = async (query_text) => {
  const start = Date.now();
  let rows;
  let conn;
  try {
    conn = await pool.getConnection();
    rows = await conn.query(query_text);
  } catch (err) {
    throw new ServerError(`Received error from server: ${err}`, 404);
  } finally {
    if (conn) conn.end();
  }
  const duration = Date.now() - start;
  console.log(`Query took ${duration} milliseconds.`);
  return rows;
};

function getValues(json_object) {
  var result = "";
  for (var attributename in json_object) {
    result += `'` + json_object[attributename] + `', `;
  }
  return result.slice(0, -2);
}

function getNames(json_object) {
  var result = "";
  for (var attributename in json_object) {
    result += attributename + `, `;
  }
  return result.slice(0, -2);
}

function getInsertCommand(table, data) {
  const values = getValues(data);
  const names = getNames(data);
  const cmd = `INSERT INTO ${table} (${names}) VALUES (${values});`;
  return cmd;
}

const FALSE = 0;
const TRUE = 1;

module.exports = {
  query,
  getInsertCommand,
  getValues,
  getNames,
  FALSE,
  TRUE,
};
