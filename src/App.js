import {Route, Routes} from "react-router-dom";
import Home from "./view/Home";
import SideMenu from "./component/structure/SideMenu";
import {Box} from "@mui/material";
import './App.css'
import paths from "./paths";
import BankAccount from "./view/bank_account/BankAccount";
import Bills from "./view/Bills";
import Customer from "./view/Customer";
import Provider from "./view/Provider";
import NewBankAccount from "./view/bank_account/NewBankAccount";
import BankTransaction from "./view/BankTransaction";
import {NewAccountIncome} from "./view/NewAccountIncome";
import {ThemeProvider} from "@mui/material";
import {appTheme} from "./appTheme";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

function App() {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={appTheme}>
                <Box>
                    <SideMenu/>
                    <Routes>
                        <Route path={paths.account} element={<BankAccount/>}/>
                        <Route path={paths.new_account} element={<NewBankAccount/>}/>
                        <Route path={paths.bank_transition} element={<BankTransaction/>}/>
                        <Route path={paths.bills} element={<Bills/>}/>
                        <Route path={paths.customer} element={<Customer/>}/>
                        <Route path={paths.provider} element={<Provider/>}/>
                        <Route path={paths.new_income} element={<NewAccountIncome/>}/>
                        <Route path={"/"} index element={<Home/>}/>
                    </Routes>
                </Box>
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default App;
