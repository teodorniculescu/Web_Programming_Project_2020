const {
  query,
  getInsertCommand,
  getNames,
  getValues,
  FALSE,
  TRUE,
} = require("../data");
const { generateToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { hash, compare } = require("../security/Password");
const { send } = require("../email");

function generate_random_number(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

const register_request = async (username, password, name, email) => {
  const hashedPassword = await hash(password);
  console.log(hashedPassword);
  const role = username === "admin" ? "admin" : "user";
  const random_number = generate_random_number(0, 256);
  const data = {
    username: username,
    password: hashedPassword,
    name: name,
    role: role,
    email: email,
    valid: FALSE,
    random: random_number,
  };
  const cmd = getInsertCommand("Users", data);
  let result = await query(cmd);
  const id = result.insertId;
  send(email, id, random_number);
};

const register_confirm = async (id, random) => {
  const cmd = `UPDATE Users SET valid=${TRUE} WHERE id=${id} AND random=${random};`;
  const result = await query(cmd);
  return result.affectedRows;
};

const login = async (username_or_email, password) => {
  const values = getValues({ username_or_email });
  const cmd = `SELECT * FROM Users WHERE username=${values} or email=${values};`;
  const query_res = (await query(cmd))[0];
  if (query_res === undefined) {
    throw new ServerError(
      `Utilizatorul inregistrat cu username-ul sau parola: ${username_or_email} nu exista!`,
      404
    );
  }
  if (query_res.valid === FALSE) {
    throw new ServerError("Contul nu este validat!", 404);
  }
  if (await compare(password, query_res.password)) {
    return await generateToken({
      userId: query_res.id,
      userRole: query_res.role,
    });
  }
  throw new ServerError("Combinatia de username si parola nu este buna!", 404);
};

const getAll = async () => {
  const cmd = `SELECT * FROM Users;`;
  const query_res = await query(cmd);
  return query_res;
};

const getDataPerm = async (username_or_email) => {
  const values = getValues({ username_or_email });
  const cmd = `SELECT * FROM Users WHERE username=${values} or email=${values};`;
  const query_res = await query(cmd);
  return query_res;
};

const toggleSuport = async (id) => {
  const values = getValues({ id });
  const cmd = `SELECT * FROM Users WHERE id=${values};`;
  const query_res = await query(cmd);
  const current_role = query_res[0].role;
  if (current_role === "admin")
    throw new ServerError(`Nu pot schimba rolul admin-ului`, 404);
  let new_role = "user";
  if (current_role === "user") new_role = "suport";
  const role_values = getValues({ new_role });
  const update_cmd = `UPDATE Users SET role=${role_values} WHERE id=${values};`;
  await query(update_cmd);
};

module.exports = {
  register_request,
  register_confirm,
  getDataPerm,
  toggleSuport,
  getAll,
  login,
};
