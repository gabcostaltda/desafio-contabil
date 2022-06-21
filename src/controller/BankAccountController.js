const {contaBancariaEventEmitter} = window.contabilizeApi;
console.log("WHAT AM I ???", contabilizeApi)
const BankAccountController = () => ({
  getBankAccounts: contaBancariaEventEmitter.obterContasBancarias,
  createBankAccount: contaBancariaEventEmitter.criarContaBancaria
})

export default BankAccountController()