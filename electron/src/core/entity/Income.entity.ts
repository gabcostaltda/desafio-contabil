import {Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BankAccount} from "./BankAccount.entity";

@Entity()
@Check(`"type" IN ('CREDIT', 'DEBIT', 'CASH', 'TRANSFER')`)
export class Income {

    constructor(description: string, amount: number, date: Date, type: string, bankAccount: BankAccount) {
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.bankAccount = bankAccount;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @Column()
    type: string;

    @ManyToOne(type => BankAccount, bankAccount => bankAccount.incomes)
    @JoinColumn({name: "bank_account_id", referencedColumnName: "id"})
    bankAccount: BankAccount;

}
