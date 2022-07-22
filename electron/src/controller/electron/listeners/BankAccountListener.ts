import {BankAccountQuery} from "../../../application/query/BankAccountQuery";
import {AppDataSource} from "../../../data-source";
import {BankAccount} from "../../../core/entity";
import {NewBankAccount} from "../../../application/command/NewBankAccount";
import {NewBankAccountDTO} from "../../../application/dto/NewBankAccountDTO";
import {BankAccountTransactionQuery} from "../../../application/query/BankAccountTransactionQuery";
import event_channels from "../../../electron-event-channels"

const {ipcMain} = require("electron");

const bankAccountRepository = AppDataSource.getRepository(BankAccount);
const bankAccountQuery = new BankAccountQuery(bankAccountRepository);
const newBankAccount = new NewBankAccount(bankAccountRepository);
const bankAccountTransactionQuery = new BankAccountTransactionQuery(bankAccountRepository);

ipcMain.handle(event_channels.getAllBankAccounts,
    async (event) => await bankAccountQuery.getAll());

ipcMain.handle(event_channels.createBankAccount, async (event, newBankAccountDto: NewBankAccountDTO) => {
    await newBankAccount.execute(newBankAccountDto)
    return "Conta bancária criada com sucesso.";
});

ipcMain.handle(event_channels.getAccountTransactions,
    async (event, accountId: number) => await bankAccountTransactionQuery.getAllFromBankAccount(accountId))

module.exports = ipcMain