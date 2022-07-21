import {Repository} from "typeorm";
import {BankAccount} from "../../core/entity";
import {IncomeForListingDTO} from "../dto/IncomeForListingDTO";
import {BankAccountForIncomeListingDTO} from "../dto/BankAccountForListingDTO";
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
}