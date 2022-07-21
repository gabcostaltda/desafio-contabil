import {AppDataSource} from "../../../../src/data-source";
import {BankAccount} from "../../../../src/core/entity";
import {NewBankAccount} from "../../../../src/application/command/NewBankAccount";
import {NewBankAccountDTO} from "../../../../src/application/dto/NewBankAccountDTO";

describe("New Bank Account Tests", () => {
    beforeEach(async () => {
        await AppDataSource.synchronize(true)
    })

    it('should create a new bank account', async function () {
        const newBankAccount = new NewBankAccount(AppDataSource.getRepository(BankAccount));

        const bank = "Itaú";
        const account = "12345-6";
        const agency = "12345-6";
        const balance = 1000;
        let bankAccount = new NewBankAccountDTO(bank, account, agency, balance);

        const createdBankAccount = await newBankAccount.execute(bankAccount);

        expect(createdBankAccount).not.toBeNull();
        expect(createdBankAccount.bank).toBe(bankAccount.bank);
        expect(createdBankAccount.account).toBe(bankAccount.account);
        expect(createdBankAccount.agency).toBe(bankAccount.agency);
        expect(createdBankAccount.balance).toBe(bankAccount.balance);
    })
})