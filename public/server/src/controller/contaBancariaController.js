const contaBancariaController = {
    obterTodasContasBancarias(ctx) {
        ctx.body = [{
            "banco": "Bradesco",
            "conta": "1234-4",
            "agencia": "44433",
            "saldo": 1299.99
        }];
    },

    criarContaBancaria(ctx) {

    },

    atualizarContaBancaria(ctx) {

    }
}

export default contaBancariaController

