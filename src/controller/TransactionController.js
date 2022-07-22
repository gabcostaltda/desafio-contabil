const {TransactionEvents} = window.contabilizeApi;

const TransactionController = () => ({
    getAllTransactions: TransactionEvents.getAllTransactions(),
    createIncome: TransactionEvents.createIncome(),
    listTransactionTypes: TransactionEvents.listTransactionTypes(),
})

export default TransactionController();