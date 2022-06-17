const ContaBancariaBuilder = require("../../builder/ContaBancariaBuilder");
const EntradaBuilder = require("../../builder/EntradaBuilder");
const EntradaService = require("../../../src/service/EntradaService");
const {conta_bancaria} = require("../../../src/core/models");
const truncate = require("../truncate");
const {contaBancariaService} = require("../../../src/service");

describe("ContaBancariaService", () => {
    beforeEach(async () => {
        try {
            await truncate();
        } catch (e) {
            console.error(e);
        }
    });

    it("Deve listar as entradas de uma conta bancária", async () => {
        let contaBancaria = new ContaBancariaBuilder().build();
        let contaBancariaCriada = await conta_bancaria.create(contaBancaria);
        let novaEntradaDaConta = new EntradaBuilder().build(contaBancariaCriada.id);
        let entradaCriada = await new EntradaService().adicionar(
            novaEntradaDaConta,
            contaBancariaCriada
        );

        const entradasDaConta = await contaBancariaService.obterEntradas(
            contaBancariaCriada.id
        );

        expect(entradasDaConta).not.toBe(null);
        expect(entradasDaConta).not.toBe(undefined);
        expect(entradasDaConta.length).toBe(1);
        expect(entradasDaConta[0].id).toBe(entradaCriada.id);
    });

    it("Deve listar as contas bancárias", async () => {
        const novaConta = new ContaBancariaBuilder().build();
        const {agencia, banco, conta, id, saldo} = await contaBancariaService.criarConta(novaConta);

        const contasObtidas = await contaBancariaService.obterTodas();

        expect(contasObtidas).toHaveLength(1);
        expect(contasObtidas[0]).toMatchObject({agencia, banco, conta, id, saldo})
    });

    it("Deve criar uma conta bancaria", async () => {
        const novaConta = new ContaBancariaBuilder().build();

        const contaCriada = await contaBancariaService.criarConta(novaConta);

        expect(contaCriada).not.toBe(null)
        expect(contaCriada).not.toBe(undefined)
    })
});
