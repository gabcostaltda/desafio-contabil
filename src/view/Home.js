import {AppBar, Box, Grid, Typography} from "@mui/material";
import AccountCard from "../component/core/AccountCard";
import BillsCard from "../component/core/BillsCard";
import CustomerCard from "../component/core/CustomerCard";
import ProviderCard from "../component/core/ProviderCard";
import paths from "../paths";
import TopBar from "../component/TopBar";

console.log(paths)
const drawerWidth = 240;
const Home = () =>
    <Box sx={{display: 'flex'}}>
        <TopBar title='Início'/>
        <Grid container spacing={2}
              sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, mt: `64px`}}>
            <Grid item xs={6}>
                <AccountCard path={paths.account}/>
            </Grid>
            <Grid item xs={6}>
                <BillsCard path={paths.bills}/>
            </Grid>
            <Grid item xs={6}>
                <CustomerCard path={paths.customer}/>
            </Grid>
            <Grid item xs={6}>
                <ProviderCard path={paths.provider}/>
            </Grid>
        </Grid>
    </Box>

export default Home;