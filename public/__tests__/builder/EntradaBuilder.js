const TiposDeTransacao = require("../../src/core/enum/TipoDeTransacao")

module.exports = function EntradaBuilder() {
    let Entrada = {
        valor: 1.00,
        data: Date.now(),
        transacao: TiposDeTransacao.tipos[0].chave,
    }

    this.build = function(contaBancariaId) {
        Entrada.conta_bancaria_id = contaBancariaId;
        return Entrada;
    }

    this.comValor = function (valor) {
        Entrada.valor = valor
        return this;
    }
}