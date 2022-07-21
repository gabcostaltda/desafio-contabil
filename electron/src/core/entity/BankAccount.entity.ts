import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Income} from "./Income.entity";

@Entity()
export class BankAccount {

    constructor(bank: string, account: string, agency: string, balance: number, incomes?: Income[]) {
        this.bank = bank;
        this.account = account;
        this.agency = agency;
        this.balance = balance;
        this.incomes = incomes;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bank: string;

    @Column()
    account: string;

    @Column()
    agency: string;

    @Column()
    balance: number;

    @OneToMany(type => Income, income => income.bankAccount, {cascade: true})
    incomes: Income[];

}