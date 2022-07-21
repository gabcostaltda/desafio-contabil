import {Repository} from "typeorm";
import {BankAccount} from "../../core/entity";
import {NewBankAccountDTO} from "../dto/NewBankAccountDTO";

export class NewBankAccount {

    constructor(private bankAccountRepository: Repository<BankAccount>) {
        this.bankAccountRepository = bankAccountRepository;
    }

    async execute(rawBankAccount: NewBankAccountDTO): Promise<BankAccount> {
        const bankAccount = new BankAccount(rawBankAccount.bank,
            rawBankAccount.account,
            rawBankAccount.agency,
            rawBankAccount.balance);

        return await this.bankAccountRepository.save(bankAccount);
    }
}