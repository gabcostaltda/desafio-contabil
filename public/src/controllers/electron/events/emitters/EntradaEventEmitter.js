const {ipcRenderer} = require("electron");

module.exports = {
    criarEntrada: () => ipcRenderer.invoke("novaEntrada", entrada)
}
