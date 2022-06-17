module.exports = function ContaBancariaBuilder() {
  let contaBancaria = {
    banco: "Itau",
    agencia: "1234",
    conta: "456-5",
    saldo: 1299.99
  };

  this.build = function () {
    return contaBancaria;
  };

  this.comBanco = function (banco) {
    contaBancaria.banco = banco;
    return this;
  };

  this.comSaldo = function (saldo) {
    contaBancaria.saldo = saldo;
    return this;
  };

};
