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

const getByCategory = async (category) => {
  const cmd = `SELECT * FROM Products WHERE category=${category};`;
  const query_res = await query(cmd);
  return query_res;
};

const getAll = async () => {
  const cmd = `SELECT * FROM Products;`;
  const query_res = await query(cmd);
  return query_res;
};

const getById = async (id) => {
  const cmd = `SELECT * FROM Products WHERE id=${id};`;
  const query_res = await query(cmd);
  return query_res;
};

const addProduct = async (
  name,
  picture,
  price,
  currency,
  quantity,
  category
) => {
  const data = {
    name,
    picture,
    price,
    currency,
    quantity,
    category,
  };
  const cmd = getInsertCommand("Products", data);
  const query_res = await query(cmd);
  return query_res;
};

const deleteProduct = async () => {};

const updateProduct = async () => {};

module.exports = {
  getByCategory,
  getById,
  getAll,
  addProduct,
  deleteProduct,
  updateProduct,
};
