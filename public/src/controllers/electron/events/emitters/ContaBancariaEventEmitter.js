const {ipcRenderer} = require("electron");

module.exports = {
    obterContasBancarias: () => ipcRenderer.invoke("obterTodasContasBancarias"),
    criarContaBancaria: (contaBancaria) => ipcRenderer.invoke("novaContaBancaria", contaBancaria),
    obterEntradasDaConta: () => ipcRenderer.invoke("obterEntradasDaConta", contaId)
}