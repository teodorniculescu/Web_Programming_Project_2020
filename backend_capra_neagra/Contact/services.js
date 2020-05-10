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

const getAll = async () => {
  const cmd = `SELECT * FROM Contact;`;
  const query_res = await query(cmd);
  return query_res;
};

const postQuestion = async (question) => {
  const data = { message: question, answer: "", valid: FALSE };
  const cmd = getInsertCommand("Contact", data);
  await query(cmd);
};

const putAnswer = async (id, answer) => {
  const values = getValues({ answer });
  const cmd = `UPDATE Contact SET answer=${values} WHERE id=${id};`;
  await query(cmd);
};

const toggleValid = async (id) => {
  const values = getValues({ id });
  const cmd = `SELECT * FROM Contact WHERE id=${values};`;
  const query_res = await query(cmd);
  const current_role = query_res[0].valid;
  console.log(current_role);
  let new_role = FALSE;
  if (current_role === FALSE) new_role = TRUE;
  const role_values = getValues({ new_role });
  console.log(role_values);
  const update_cmd = `UPDATE Contact SET valid=${role_values} WHERE id=${values};`;
  await query(update_cmd);
};

module.exports = {
  getAll,
  putAnswer,
  postQuestion,
  toggleValid,
};
