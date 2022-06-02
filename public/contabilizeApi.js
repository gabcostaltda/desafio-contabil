const {ipcRenderer} = require("electron");

module.exports = {
    asyncHello: async (args) => ipcRenderer.send("async-hello", args),
    syncHello: (args) => ipcRenderer.sendSync("sync-hello", args),
    obterContasBancarias: () => ipcRenderer.invoke("obterTodasContasBancarias"),
    criarContaBancaria: (contaBancaria) => ipcRenderer.invoke("novaContaBancaria", contaBancaria)
}