const {ipcRenderer} = require("electron");
const event_channels = require("../../../electron-event-channels")
import type {NewBankAccountDTO} from "../../../application/dto/NewBankAccountDTO";

export const BankAccountEvents = {
    obterContasBancarias: () => ipcRenderer.invoke(event_channels.getAllBankAccounts),
    getAllBankAccounts: () => ipcRenderer.invoke(event_channels.getAllBankAccounts),
    getBankAccountTransactions: (bankAccountId: number) => ipcRenderer.invoke(event_channels.getAccountTransactions, bankAccountId),

    criarContaBancaria: (contaBancaria: NewBankAccountDTO) => ipcRenderer.invoke(event_channels.createBankAccount, contaBancaria),
    createBankAccount: (contaBancaria: NewBankAccountDTO) => ipcRenderer.invoke(event_channels.createBankAccount, contaBancaria),

    obterEntradasDaConta: (contaId: number) => ipcRenderer.invoke(event_channels.getAccountTransactions, contaId),

}