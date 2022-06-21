const { entrada } = require("../core/models");
module.exports = function EntradaService() {
  this.adicionar = async (_entrada, contaBancaria) => {
    contaBancaria.saldo += _entrada.valor;
    await contaBancaria.save();
    return entrada.create(_entrada);
  };
};
