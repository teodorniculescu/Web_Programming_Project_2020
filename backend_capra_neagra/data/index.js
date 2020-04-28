const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  port: process.env.MARIADB_PORT,
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
    throw err;
  } finally {
    if (conn) conn.end();
  }
  const duration = Date.now() - start;
  console.log(`Query took ${duration} and returned ${rows.length} rows.`);
  return rows;
};

module.exports = {
  query,
};
