import {BankAccountTransactionQuery} from "../../../../src/application/query/BankAccountTransactionQuery";
import {AppDataSource} from "../../../../src/data-source";
import {BankAccount, Income} from "../../../../src/core/entity";
import {NewAccountIncome} from "../../../../src/application/command/NewAccountIncome";
import {NewAccountIncomeDTO} from "../../../../src/application/dto/NewAccountIncomeDTO";

describe("BankTransaction queries tests", () => {

    const bankAccountRepo = AppDataSource.getRepository(BankAccount);

    it("should get all BankTransaction", async () => {
        const bankTransactionService = new BankAccountTransactionQuery(bankAccountRepo);
        const persistedBankAccount = await bankAccountRepo.save(new BankAccount("Banco do Brasil", "12345", "123", 0));
        const incomeRepo = AppDataSource.getRepository(Income);
        const newAccountIncome = new NewAccountIncome(incomeRepo, bankAccountRepo);
        let newAccountIncomeDTO = new NewAccountIncomeDTO("Salário", 1000, new Date(), "CREDIT", persistedBankAccount.id);
        const newIncome = await newAccountIncome.execute(newAccountIncomeDTO);

        const allBankAccountTransactions = await bankTransactionService.getAllFromBankAccount(1);

        expect(allBankAccountTransactions.length).toBe(1);
        const incomeForListingDTO = allBankAccountTransactions[0];
        expect(incomeForListingDTO.description).toBe(newIncome.description);
        expect(incomeForListingDTO.amount).toBe(newIncome.amount);
        expect(incomeForListingDTO.date).toStrictEqual(newIncome.date);
        expect(incomeForListingDTO.type).toBe(newIncome.type);
        expect(incomeForListingDTO.bankAccount.bank).toBe(persistedBankAccount.bank);
        expect(incomeForListingDTO.bankAccount.account).toBe(persistedBankAccount.account);
        expect(incomeForListingDTO.bankAccount.agency).toBe(persistedBankAccount.agency);
    })
})