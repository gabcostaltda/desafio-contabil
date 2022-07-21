import {BankAccount, Income} from "../../core/entity";
import {Repository} from "typeorm";
import {BusinessException} from "../../core/exception/BusinessException";
import {NewAccountIncomeDTO} from "../dto/NewAccountIncomeDTO";
import {UseCase} from "./UseCase";

export class NewAccountIncome implements UseCase<NewAccountIncomeDTO, Income> {

    private incomeRepository: Repository<Income>;
    private bankAccountRepository: Repository<BankAccount>;

    constructor(incomeRepository: Repository<Income>, bankAccountRepository: Repository<BankAccount>) {
        this.incomeRepository = incomeRepository;
        this.bankAccountRepository = bankAccountRepository;
    }

    async execute(newAccountIncomeDTO: NewAccountIncomeDTO): Promise<Income> {
        let bankAccount;

        try {
            bankAccount = await this.bankAccountRepository.findOneBy({id: newAccountIncomeDTO.bankAccount});
        } catch (error) {
            console.error(error);
            throw new Error("Internal Server Error");
        }

        if (!bankAccount) {
            throw new BusinessException("BankAccountEntity not found");
        }

        const income = new Income(newAccountIncomeDTO.description, newAccountIncomeDTO.amount, newAccountIncomeDTO.date, newAccountIncomeDTO.type, bankAccount);

        return this.incomeRepository.save(income);
    }
}