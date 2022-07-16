const {ipcRenderer} = require("electron");

module.exports = {
    criarEntrada: () => ipcRenderer.invoke("novaEntrada", entrada),
    obterTiposDeEntrada: () => ipcRenderer.invoke("obterTiposDeEntrada"),
}
