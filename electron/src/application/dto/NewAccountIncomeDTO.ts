export class NewAccountIncomeDTO {

    constructor(public description: string,
                public amount: number,
                public date: Date,
                public type: string,
                public bankAccount: number) {
        this.description = description;
        this.amount = amount;
        this.date = date;
        this.type = type;
        this.bankAccount = bankAccount;
    }
}
