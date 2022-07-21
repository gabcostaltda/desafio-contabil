import {TransactionType} from "../../src/core/enum/TransactionType";

describe("TransactionType tests", () => {

    it("should return the names of the transaction types", () => {
        expect(TransactionType.getName("CREDIT")).toBe("CREDIT");
        expect(TransactionType.getName("CASH")).toBe("CASH");
        expect(TransactionType.getName("TRANSFER")).toBe("TRANSFER");
        expect(TransactionType.getName("DEBIT")).toBe("DEBIT");
    });

    it("should return the values of the transaction types", () => {
        expect(TransactionType.getValue("CREDIT")).toBe("Crédito");
        expect(TransactionType.getValue("CASH")).toBe("Dinheiro");
        expect(TransactionType.getValue("TRANSFER")).toBe("Transferência");
        expect(TransactionType.getValue("DEBIT")).toBe("Débito");
    });
})