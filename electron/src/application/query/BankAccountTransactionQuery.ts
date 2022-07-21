import {Repository} from "typeorm";
import {BankAccount} from "../../core/entity";
import {IncomeForListingDTO} from "../dto/IncomeForListingDTO";
import {BankAccountForIncomeListingDTO} from "../dto/BankAccountForIncomeListingDTO";
import {BusinessException} from "../../core/exception/BusinessException";

export class BankAccountTransactionQuery {
    private bankAccountRepository: Repository<BankAccount>;

    constructor(bankAccountRepository: Repository<BankAccount>) {
        this.bankAccountRepository = bankAccountRepository;
    }

    async getAllFromBankAccount(bankAccountId: number): Promise<IncomeForListingDTO[]> {
        const bankAccount = await this.bankAccountRepository.findOne({
            select: {id: true, bank: true, account: true, agency: true},
            where: {id: bankAccountId},
            relations: ["incomes"]
        });

        if (!bankAccount) {
            throw new BusinessException("Bank account not found");
        }

        return bankAccount.incomes
            .map(income => new IncomeForListingDTO(income.description,
                income.amount,
                income.date,
                income.type, new BankAccountForIncomeListingDTO(bankAccount.bank, bankAccount.account, bankAccount.agency)));
    }

    async getAllFromAllBankAccounts(): Promise<IncomeForListingDTO[]> {
        const bankAccounts = await this.bankAccountRepository.find({
            select: {id: true, bank: true, account: true, agency: true},
            relations: ["incomes"]
        });

        return bankAccounts.reduce((acc, bankAccount) => {
            return acc.concat(bankAccount.incomes.map(income => new IncomeForListingDTO(income.description,
                income.amount,
                income.date,
                income.type, new BankAccountForIncomeListingDTO(bankAccount.bank, bankAccount.account, bankAccount.agency))));
        }, []);
    }
}