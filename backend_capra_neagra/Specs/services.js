const {
  query,
  getInsertCommand,
  getValues,
  getNames,
  FALSE,
  TRUE,
} = require("../data");
const { generateToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { hash, compare } = require("../security/Password");

const getById = async (id) => {
  const cmd = `SELECT * FROM Specs WHERE id=${id};`;
  const query_res = await query(cmd);
  return query_res;
};
const getByIdProducts = async (id) => {
  const cmd = `SELECT * FROM Specs WHERE id_products=${id};`;
  const query_res = await query(cmd);
  return query_res;
};

module.exports = {
  getById,
  getByIdProducts,
};
