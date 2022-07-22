const {BankAccountEvents} = window.contabilizeApi;

const BankAccountController = () => ({
  getBankAccounts: BankAccountEvents.getBankAccounts,
  createBankAccount: BankAccountEvents.createBankAccount
})

export default BankAccountController()