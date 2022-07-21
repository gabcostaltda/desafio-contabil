export class BankAccountForListing {

    constructor(public id: number,
                public bank: string,
                public account: string,
                public agency: string,
                public balance: number) {
        this.id = id;
        this.bank = bank;
        this.account = account;
        this.agency = agency;
        this.balance = balance;
    }
}