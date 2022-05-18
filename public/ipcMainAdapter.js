const { ipcMain } = require("electron");
const { contaBancariaModel } = require("./src/index.js");
ipcMain.handle("obterTodasContasBancarias",
  async (event) => {
    console.log("MODDDEEEEELL", contaBancariaModel);
    console.log("indexxxxxx", require("./src/index.js"));
   return await contaBancariaModel.findAll();
  });

ipcMain.handle("novaContaBancaria", async (event, contaBancaria) => {
  await contaBancariaModel.create({ ...contaBancaria });
  return "Conta bancaria criada com sucesso.";
});

module.exports = ipcMain;