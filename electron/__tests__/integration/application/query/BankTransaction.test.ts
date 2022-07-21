import {BankAccountTransactionQuery} from "../../../../src/application/query/BankAccountTransactionQuery";
import {AppDataSource} from "../../../../src/data-source";
import {BankAccount, Income} from "../../../../src/core/entity";
import {NewAccountIncome} from "../../../../src/application/command/NewAccountIncome";
import {NewAccountIncomeDTO} from "../../../../src/application/dto/NewAccountIncomeDTO";

describe("BankTransaction queries tests", () => {

    const bankAccountRepo = AppDataSource.getRepository(BankAccount);
    const bankTransactionService = new BankAccountTransactionQuery(bankAccountRepo);

    beforeEach(async () => {
        await AppDataSource.synchronize(true)
    })

    it("should get all BankTransaction", async () => {
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
    });

    it("should get all BankTransaction from all BankAccounts", async () => {
        const persistedBankAccounts = await bankAccountRepo.save([new BankAccount("Banco do Brasil", "12345", "123", 0),
            new BankAccount("Itaú", "12345", "123", 0)]);
        const incomeRepo = AppDataSource.getRepository(Income);
        const newAccountIncome = new NewAccountIncome(incomeRepo, bankAccountRepo);
        const descriptionIncome0 = "Salário";
        const date0 = new Date();
        const type0 = "CREDIT";
        let amount0 = 1000;
        let newAccountIncomeDTO0 = new NewAccountIncomeDTO(descriptionIncome0, amount0, date0, type0, persistedBankAccounts[0].id);
        const descriptionIncome1 = "Venda de 1kg de batata";
        const amount1 = 100;
        const date1 = new Date();
        const type1 = "CASH";
        let newAccountIncomeDTO1 = new NewAccountIncomeDTO(descriptionIncome1, amount1, date1, type1, persistedBankAccounts[1].id);
        await Promise.all([newAccountIncome.execute(newAccountIncomeDTO0), newAccountIncome.execute(newAccountIncomeDTO1)]);

        const transactions = await bankTransactionService.getAllFromAllBankAccounts();

        expect(transactions.length).toBe(2);
        expect(transactions[0].description).toBe(descriptionIncome0);
        expect(transactions[1].description).toBe(descriptionIncome1);
        expect(transactions[0].amount).toBe(amount0);
        expect(transactions[1].amount).toBe(amount1);
        expect(transactions[0].date).toStrictEqual(date0);
        expect(transactions[1].date).toStrictEqual(date1);
        expect(transactions[0].type).toBe(type0);
        expect(transactions[1].type).toBe(type1);
    })
})