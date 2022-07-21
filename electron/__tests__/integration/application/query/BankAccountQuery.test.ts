import {AppDataSource} from "../../../../src/data-source";
import {BankAccount} from "../../../../src/core/entity";
import {BankAccountQuery} from "../../../../src/application/query/BankAccountQuery";

describe("BankAccountQuery tests", () => {

    const bankAccountRepo = AppDataSource.getRepository(BankAccount);
    const bankAccountQuery = new BankAccountQuery(bankAccountRepo);

    beforeEach(async () => {
        await AppDataSource.synchronize(true);

    })

    it("should get all bank accounts", async function () {
        const persistedBankAccount0 = await bankAccountRepo.save(new BankAccount("Banco do Brasil", "12345", "123", 0));
        const persistedBankAccount1 = await bankAccountRepo.save(new BankAccount("Itaú", "123", "322", 1200));

        const bankAccounts = await bankAccountQuery.getAll();

        expect(bankAccounts).not.toBeNull();
        expect(bankAccounts.length).toBe(2);
        expect(bankAccounts[0].id).toBe(persistedBankAccount0.id);
        expect(bankAccounts[0].bank).toBe(persistedBankAccount0.bank);
        expect(bankAccounts[0].account).toBe(persistedBankAccount0.account);
        expect(bankAccounts[0].agency).toBe(persistedBankAccount0.agency);
        expect(bankAccounts[0].balance).toBe(persistedBankAccount0.balance);

        expect(bankAccounts[1].id).toBe(persistedBankAccount1.id);
        expect(bankAccounts[1].bank).toBe(persistedBankAccount1.bank);
        expect(bankAccounts[1].account).toBe(persistedBankAccount1.account);
        expect(bankAccounts[1].agency).toBe(persistedBankAccount1.agency);
        expect(bankAccounts[1].balance).toBe(persistedBankAccount1.balance);

    })
})