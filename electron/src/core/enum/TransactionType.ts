export const TransactionType = {
    CREDIT: "Crédito",
    CASH: "Dinheiro",
    TRANSFER: "Transferência",
    DEBIT: "Débito",

    getName: (type: string): string => Object.keys(TransactionType).find(t => t === type),

    getValue: (type: string): string => TransactionType[type]


}