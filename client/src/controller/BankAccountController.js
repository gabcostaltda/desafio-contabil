import {GET, POST} from './BaseController'

const BASE_PATH = "/contas-bancarias";

const getBankAccounts = () => GET(BASE_PATH)

const createBankAccount = (body) => POST(BASE_PATH, body)

export {getBankAccounts, createBankAccount}