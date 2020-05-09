const { query, getValues, getNames, FALSE, TRUE } = require("../data");
const { generateToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { hash, compare } = require("../security/Password");

const getByCategory = async (category) => {};

const getAll = async () => {
  const cmd = `SELECT * FROM Products;`;
  const query_res = await query(cmd);
  return query_res;
};

const addProduct = async () => {};

const deleteProduct = async () => {};

const updateProduct = async () => {};

module.exports = {
  getByCategory,
  getAll,
  addProduct,
  deleteProduct,
  updateProduct,
};
