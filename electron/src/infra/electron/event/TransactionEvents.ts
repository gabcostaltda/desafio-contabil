const {ipcRenderer} = require("electron");
const event_channels = require("../../../electron-event-channels")
import type {NewAccountIncomeDTO} from "../../../application/dto/NewAccountIncomeDTO";
import type {IncomeForListingDTO} from "../../../application/dto/IncomeForListingDTO";

export const TransactionEvents = {
    createIncome: (incomeData: NewAccountIncomeDTO) => ipcRenderer.invoke(event_channels.createIncome, incomeData),
    listTransactionTypes: () => ipcRenderer.invoke(event_channels.listTransactionTypes),
    getAllTransactions: (): Promise<IncomeForListingDTO[]> => ipcRenderer.invoke(event_channels.getAllTransactions),
}
