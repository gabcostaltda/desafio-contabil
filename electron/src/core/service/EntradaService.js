const { entrada } = require("../entity");
const tiposDeEntrda = require("../enum/TipoDeTransacao");

module.exports = function EntradaService() {
  this.adicionar = async (_entrada, contaBancaria) => {
    contaBancaria.saldo += _entrada.valor;
    await contaBancaria.save();
    return entrada.create(_entrada);
  };

  this.obterTiposDeEntrada = async () => {
    return tiposDeEntrda.tipos;
  }
};
