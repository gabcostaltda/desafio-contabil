const {conta_bancaria} = require("../entity");

module.exports = function ContaBancariaService() {
    this.obterEntradas = async (contaBancariaId) => {
        const contaObtida = await conta_bancaria.findByPk(contaBancariaId);
        return contaObtida.getEntradas();
    }

    this.obterTodas = async () => conta_bancaria.findAll({raw: true});

    this.criarConta = async (atributosDeConta) => conta_bancaria.create(atributosDeConta);
};
