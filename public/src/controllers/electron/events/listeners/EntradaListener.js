const {ipcMain} = require("electron");
const {entradaService} = require("../../../../application");

ipcMain.handle("novaEntrada", async (event, entrada) => {
    await entradaService.criarEntrada(entrada)
    return "Entrada adicionada com sucesso."
});



module.exports = ipcMain