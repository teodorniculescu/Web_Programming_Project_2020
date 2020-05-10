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
const { send_notification } = require("../email");

const getAll = async () => {
  const cmd = `SELECT * FROM Contact;`;
  const query_res = await query(cmd);
  return query_res;
};

const postQuestion = async (question, from_id) => {
  const data = { message: question, answer: "", valid: FALSE, from_id };
  const cmd = getInsertCommand("Contact", data);
  await query(cmd);
};

const putAnswer = async (id, answer) => {
  let values = getValues({ id });
  let values_answer = getValues({ answer });
  let cmd_update = `UPDATE Contact SET answer=${values_answer} WHERE id=${values};`;
  await query(cmd_update);

  // get from id
  let cmd_select = `SELECT * FROM Contact WHERE id=${values};`;
  let query_res = await query(cmd_select);
  const from_id = query_res[0].from_id;
  // inseamna ca a fost trimis de la un utilizator care nu era autentificat
  if (from_id === 0) return;
  const question = query_res[0].message;

  // get email address
  values = getValues({ from_id });
  cmd_select = `SELECT * FROM Users WHERE id=${values};`;
  query_res = await query(cmd_select);
  const email = query_res[0].email;

  // notificare prin email
  send_notification(email, question, answer);
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
