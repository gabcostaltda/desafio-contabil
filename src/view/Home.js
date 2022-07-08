import {AppBar, Box, Grid, Typography} from "@mui/material";
import TopBar from "../component/structure/TopBar";
import AccountMovementsListing from "../component/core/AccountMovementsListing";
import TotalBalanceCard from "../component/core/TotalBalanceCard";

const drawerWidth = 240;
const Home = () =>
    <Box sx={{display: 'flex'}}>
        <TopBar title='Início'/>
        <Grid container spacing={3}
              sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, mt: `0px`}}>
            <Grid item xs={12}>
                <Typography variant="h4">Olá, Fabiano.</Typography>
            <Typography variant="body1" >
               Aqui está seu resumo
            </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <TotalBalanceCard/>
            </Grid>
            <Grid item xs={12}>
                <AccountMovementsListing />
            </Grid>
        </Grid>
    </Box>

export default Home;