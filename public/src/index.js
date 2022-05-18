const db = require("./db");
const { contaBancaria } = require("./core/models/index");

module.exports = {
  initializeDatabase: async () => {
    await db.sync();
  },
  contaBancariaModel: contaBancaria
};
