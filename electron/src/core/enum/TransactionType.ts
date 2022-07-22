export const TransactionType = {
    CREDIT: "Crédito",
    CASH: "Dinheiro",
    TRANSFER: "Transferência",
    DEBIT: "Débito",

    getName: (type: string): string => Object.keys(TransactionType).find(t => t === type),

    getValue: (type: string): string => TransactionType[type],

    list: () => Object.fromEntries(Object.entries(TransactionType)
        .filter(entry => entry[0] !== "getName" && entry[0] !== "getValue" && entry[0] !== "list"))
}