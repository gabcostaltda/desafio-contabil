const {ipcMain} = require("electron");
const {contaBancariaService, entradaService} = require("./src/app.js");

ipcMain.handle("obterTodasContasBancarias",
    async (event) => await contaBancariaService.obterTodas());

ipcMain.handle("novaContaBancaria", async (event, contaBancaria) => {
    await contaBancariaService.criarConta({...contaBancaria});
    return "Conta bancária criada com sucesso.";
});

ipcMain.handle("novaEntrada", async (event, entrada) => {
    await entradaService.criarEntrada(entrada)
    return "Entrada adicionada com sucesso."
})

ipcMain.handle("obterEntradasDaConta",
    async (event, contaId) => await contaBancariaService.obterEntradas(contaId))

module.exports = ipcMain;