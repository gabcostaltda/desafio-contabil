import {Container} from "@mui/material";
import AccountCard from "../component/core/AccountCard";
import BillsCard from "../component/core/BillsCard";
import CustomerCard from "../component/core/CustomerCard";
import ProviderCard from "../component/core/ProviderCard";
import paths from "../paths";

const Home = () =>
    <Container>
        <AccountCard path={paths.account}/>
        <BillsCard path={paths.bills}/>
        <CustomerCard path={paths.customer}/>
        <ProviderCard path={paths.provider}/>
    </Container>

export default Home;