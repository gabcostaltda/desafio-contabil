export class NewBankAccountDTO {
    constructor(public bank: string,
                public account: string,
                public agency: string,
                public balance: number) {
        this.bank = bank;
        this.account = account;
        this.agency = agency;
        this.balance = balance;
    }
}