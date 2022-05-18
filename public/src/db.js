const Sequelize = require("sequelize");

module.exports = new Sequelize("contabilize", "sa", "sa", {
  dialect: "sqlite",
  storage: "./data/contabilize.sqlite"
});
