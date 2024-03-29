import {Box, Button, Container, Link} from "@mui/material";
import TopBar from "../../component/structure/TopBar";
import {useEffect, useState} from "react";
import BankAccountController from "../../controller/BankAccountController";
import {CurrencyExchange} from "@mui/icons-material";
import CustomTable from "../../component/structure/CustomTable";
import paths from "../../paths";
import {Link as RouterLink, Outlet, useLocation} from "react-router-dom";

const BankAccount = () => {
    const [bankAccounts, setBankAccounts] = useState([]);
    const {state: locationState} = useLocation();

    useEffect(() => {

        if (locationState) alert(locationState)

        async function fetchBankAccounts() {
            setBankAccounts(await BankAccountController.getBankAccounts() || []);
        }

        fetchBankAccounts()
            .catch((error) => alert(error));
    }, []);

    function createData({icone = null, banco, agencia, conta, saldo}) {
        return {icone, banco, agencia, conta, saldo};
    }

    const rows = bankAccounts.map((bankAccount) => createData(bankAccount));

    // TODO: Create actions cell for rows
    // const actions = [
    //     {icon: <CurrencyExchange/>, title: "Movimentacoes", description: "", path: ""}
    // ]

    const columns = [
        {id: "icone", label: "", minWidth: ""},
        {id: "banco", label: "Banco", minWidth: 64},
        {id: "agencia", label: "Agência", minWidth: 32},
        {id: "conta", label: "Conta", minWidth: 64},
        {
            id: "saldo",
            label: "Saldo",
            minWidth: 120,
            align: "left",
            format: (value) => "R$ " + value.toLocaleString("pt-BR")
        },
        {
            id: "acoes",
            label: "Ações",
            minWidth: 120,
            align: "left"
        }
    ];
    return (
        <Box minWidth="sm" sx={{marginLeft: "240px", marginTop: "100px"}}>
            <TopBar title="Conta"/>
            <Container sx={{display: "flex", flexDirection: "column"}}>
                <Link component={RouterLink} underline="hover" to={paths.new_account}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{alignSelf: "flex-end", justifySelf: "flex-end"}}
                    >
                        Nova Conta
                    </Button>
                </Link>
                <CustomTable columns={columns} rows={rows} rowId={"banco"}/>
            </Container>
            <Outlet/>
        </Box>
    );
};

export default BankAccount;
