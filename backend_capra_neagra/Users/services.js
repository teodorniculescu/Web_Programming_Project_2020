const { query, getValues, getNames, FALSE, TRUE } = require("../data");
const { generateToken } = require("../security/Jwt");
const { ServerError } = require("../errors");
const { hash, compare } = require("../security/Password");
const { send } = require("../email");

const register_request = async (username, password, email) => {
  const hashedPassword = await hash(password);
  const role = username === "admin" ? "admin" : "user";
  const data = {
    username: username,
    password: hashedPassword,
    role: role,
    email: email,
    valid: FALSE,
  };
  send(email);
  const values = getValues(data);
  const names = getNames(data);
  const cmd = `INSERT INTO Users (${names}) VALUES (${values});`;
  await query(cmd);
};

const login = async (username, password) => {
  const values = getValues({ username });
  const cmd = `SELECT * FROM Users WHERE username=${values};`;
  const query_res = (await query(cmd))[0];
  if (query_res === undefined) {
    throw new ServerError(
      `Utilizatorul inregistrat cu username-ul: ${username} nu exista!`,
      404
    );
  }
  if (await compare(password, query_res.password)) {
    return await generateToken({
      userId: query_res.id,
      userRole: query_res.role,
    });
  }
  throw new ServerError("Combinatia de username si parola nu este buna!", 404);
};

module.exports = {
  register_request,
  login,
};
