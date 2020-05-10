const Router = require("express")();

function addController(folder_name, url) {
  file_path = "../" + folder_name + "/controllers.js";
  url_path = "/" + url;
  const controller = require(file_path);
  Router.use(url_path, controller);
}
addController("Users", "users");
addController("Products", "products");
addController("Specs", "specs");
addController("Contact", "contact");

module.exports = Router;
