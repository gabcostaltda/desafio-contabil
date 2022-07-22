import {ipcMain} from "electron";
import {AppDataSource} from "../../../data-source";
import {BankAccount, Income} from "../../../core/entity";
import {NewAccountIncome} from "../../../application/command/NewAccountIncome";
import {NewAccountIncomeDTO} from "../../../application/dto/NewAccountIncomeDTO";
import {BankAccountTransactionQuery} from "../../../application/query/BankAccountTransactionQuery";
import event_channels from "../../../electron-event-channels"

const newAccountIncome = new NewAccountIncome(AppDataSource.getRepository(Income), AppDataSource.getRepository(BankAccount));
const bankAccountTransactionQuery = new BankAccountTransactionQuery(AppDataSource.getRepository(BankAccount));

ipcMain.handle(event_channels.createIncome, async (event, newIncome: NewAccountIncomeDTO) => {
    await newAccountIncome.execute(newIncome);

    return "Nova entrada adicionada com sucesso."
});

ipcMain.handle(event_channels.listTransactionTypes, () => {
    return bankAccountTransactionQuery.getTransactionTypes()
});

ipcMain.handle(event_channels.getAllTransactions, async (event) => {
    return await bankAccountTransactionQuery.getAllFromAllBankAccounts()
})

module.exports = ipcMain