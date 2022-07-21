import {AppDataSource} from "../../../../src/data-source";
import {BankAccount, Income} from "../../../../src/core/entity";
import {NewAccountIncome} from "../../../../src/application/command/NewAccountIncome";
import {TransactionType} from "../../../../src/core/enum/TransactionType";
import {NewAccountIncomeDTO} from "../../../../src/application/dto/NewAccountIncomeDTO";

describe("New Account IncomeEntity tests", () => {

        it('should create a new income for the specified bank account', async function () {
            const bankAccountRepository = AppDataSource.getRepository(BankAccount);
            const newAccountIncome = new NewAccountIncome(AppDataSource.getRepository(Income), bankAccountRepository);

            const bank = "Itaú";
            const account = "12345-6";
            const agency = "12345-6";
            const balance = 1000;

            let bankAccount = new BankAccount(bank, account, agency, balance);
            await bankAccountRepository.save(bankAccount);

            const description = "Salary";
            const amount = 1000;
            const date = new Date();
            const type = TransactionType.getName("CREDIT");

            const newAccountIncomeDTO = new NewAccountIncomeDTO(description, amount, date, type, bankAccount.id);
            const createdIncome = await newAccountIncome.execute(newAccountIncomeDTO);

            expect(createdIncome).not.toBeNull();
            expect(createdIncome.bankAccount).toStrictEqual(bankAccount);
            expect(createdIncome.description).toBe(newAccountIncomeDTO.description);
            expect(createdIncome.amount).toBe(newAccountIncomeDTO.amount);
            expect(createdIncome.date).toBe(newAccountIncomeDTO.date);
            expect(createdIncome.type).toBe(newAccountIncomeDTO.type);
        });
    }
)