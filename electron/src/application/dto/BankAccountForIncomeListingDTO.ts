export class BankAccountForIncomeListingDTO {

        constructor(public bank: string,
                    public account: string,
                    public agency: string) {
            this.bank = bank;
            this.account = account;
            this.agency = agency;
        }
}