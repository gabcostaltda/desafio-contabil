const {ipcMain} = require("electron");
const {contaBancariaService} = require("../../../../application");


ipcMain.handle("obterTodasContasBancarias",
    async (event) => await contaBancariaService.obterTodas());

ipcMain.handle("novaContaBancaria", async (event, contaBancaria) => {
    await contaBancariaService.criarConta({...contaBancaria});
    return "Conta bancária criada com sucesso.";
});

ipcMain.handle("obterEntradasDaConta",
    async (event, contaId) => await contaBancariaService.obterEntradas(contaId))

module.exports = ipcMain