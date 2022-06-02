const {ipcMain} = require("electron");
const {contaBancariaModel} = require("./src/index.js");
ipcMain.handle("obterTodasContasBancarias",
    async (event) => {
        let contasBancarias = await contaBancariaModel.findAll({raw: true});
        console.log("find all ---> ", contasBancarias);
        return contasBancarias;
    });

ipcMain.handle("novaContaBancaria", async (event, contaBancaria) => {
    await contaBancariaModel.create({...contaBancaria});
    return "Conta bancaria criada com sucesso.";
});

module.exports = ipcMain;