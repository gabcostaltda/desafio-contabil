let contabilizeApi = window.contabilizeApi;

const BankAccountController = () => ({
  getBankAccounts: contabilizeApi.obterContasBancarias,
  createBankAccount: contabilizeApi.criarContaBancaria
})

export default BankAccountController()