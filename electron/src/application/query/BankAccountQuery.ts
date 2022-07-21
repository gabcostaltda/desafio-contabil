import {Repository} from "typeorm";
import {BankAccount} from "../../core/entity";
import {BankAccountForListing} from "../dto/BankAccountForListing";

export class BankAccountQuery {

    private bankAccountRepository: Repository<BankAccount>;

    constructor(bankAccountRepository: Repository<BankAccount>) {
        this.bankAccountRepository = bankAccountRepository;
    }

    async getAll(): Promise<BankAccountForListing[]> {
        return this.bankAccountRepository
            .find()
            .then(bankAccounts => bankAccounts.map(bankAccount => new BankAccountForListing(bankAccount.id,
                bankAccount.bank, bankAccount.account, bankAccount.agency, bankAccount.balance)))
    }
}
