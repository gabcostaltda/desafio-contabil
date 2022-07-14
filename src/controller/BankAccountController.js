const {contaBancariaEventEmitter} = window.contabilizeApi;

const BankAccountController = () => ({
  getBankAccounts: contaBancariaEventEmitter.obterContasBancarias,
  createBankAccount: contaBancariaEventEmitter.criarContaBancaria
})

export default BankAccountController()