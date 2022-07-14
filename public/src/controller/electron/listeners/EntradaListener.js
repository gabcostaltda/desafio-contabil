const {ipcMain} = require("electron");
const {entradaService} = require("../../../core/service");

ipcMain.handle("novaEntrada", async (event, entrada) => {
    await entradaService.adicionar(entrada)
    return "Entrada adicionada com sucesso."
});

ipcMain.handle("obterTiposDeEntrada", () => {
    console.log("obterTiposDeEntrada");
        return entradaService.obterTiposDeEntrada()
    }
);
module.exports = ipcMain