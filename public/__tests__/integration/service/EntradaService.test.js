const truncate = require("../truncate");
const { conta_bancaria } = require("../../../src/core/entity");
const index = require("../../../src/core/entity");
const ContaBancariaBuilder = require("../../builder/ContaBancariaBuilder");
const EntradaBuilder = require("../../builder/EntradaBuilder");
const EntradaService = require("../../../src/core/service/EntradaService");

describe("EntradaService", () => {
  beforeEach(async () => {
    try {
      await truncate();
    } catch (e) {
      console.error(e);
    }
  });

  it("Deve adicionar uma entrada e incrementar o saldo da conta bancaria", async () => {
    const contaBancariaBuilder = new ContaBancariaBuilder();
    const entradaBuilder = new EntradaBuilder();
    const entradaService = new EntradaService();
    const contaBancaria = contaBancariaBuilder.comSaldo(100.0).build();
    const contaBancariaCriada = await conta_bancaria.create(contaBancaria);
    let novaEntrada = entradaBuilder
      .comValor(100.0)
      .build(contaBancariaCriada.id);
    let entradaCriada;
    try {
      entradaCriada = await entradaService.adicionar(
        novaEntrada,
        contaBancariaCriada
      );
    } catch (e) {
      console.error(e);
    }

    const contaComSaldoIncrementado = await conta_bancaria.findByPk(
      contaBancariaCriada.id
    );

    let entradasDaConta = await contaComSaldoIncrementado.getEntradas();

    expect(contaComSaldoIncrementado.saldo).toBe(200.0);
    expect(entradasDaConta.map((e) => e.id)).toContainEqual(entradaCriada.id);
    expect(entradaCriada).not.toBe(null);
    expect(entradaCriada).not.toBe(undefined);
    expect(entradaCriada.id).not.toBe(undefined);
    expect(entradaCriada.id).not.toBe(null);
  });

  it("Deve listar os tipos disponiveis de entradas", async () => {
    const entradaService = new EntradaService();

    const tipos = await entradaService.obterTiposDeEntrada();

    expect(tipos).not.toBe(null);
    expect(tipos).not.toBe(undefined);
    expect(tipos.length).toBe(4);
  })
});
