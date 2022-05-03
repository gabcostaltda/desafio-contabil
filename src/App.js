import {Route, Routes} from "react-router-dom";
import Home from "./view/Home";
import SideMenu from "./component/SideMenu";
import {Box} from "@mui/material";
import './App.css'
import paths from "./paths";
import Account from "./view/Account";
import Bills from "./view/Bills";
import Customer from "./view/Customer";
import Provider from "./view/Provider";

function App() {

    return (
        <Box>
            <SideMenu/>
            <Routes>
                <Route path={"/"} index element={<Home/>}/>
                <Route path={paths.account} element={<Account/>}/>
                <Route path={paths.bills} element={<Bills/>}/>
                <Route path={paths.customer} element={<Customer/>}/>
                <Route path={paths.provider} element={<Provider/>}/>
            </Routes>
        </Box>
    );
}

export default App;
