import {Box, Button, Container, Link} from "@mui/material";
import TopBar from "../../component/TopBar";
import {useEffect, useState} from "react";
import {getBankAccounts} from "../../controller/BankAccountController";
import CustomTable from "../../component/core/CustomTable";
import paths from "../../paths";
import {Link as RouterLink, Outlet} from "react-router-dom";

const BankAccount = () => {
    const [bankAccounts, setBankAccounts] = useState([]);
    useEffect(() => {
        async function fetchBankAccounts() {
            let response = await getBankAccounts();
            let responseJson = await response.json();
            setBankAccounts([...responseJson]);
        }

        fetchBankAccounts()
            .catch(error => console.error(error))
    }, [])

    function createData({icone = null, banco, agencia, conta, saldo}) {
        return {icone, banco, agencia, conta, saldo};
    }

    const rows = bankAccounts.map(bankAccount => createData(bankAccount))

    const columns = [
        {id: 'icone', label: '', minWidth: ''},
        {id: 'banco', label: 'Banco', minWidth: 64},
        {id: 'agencia', label: 'Agência', minWidth: 32},
        {id: 'conta', label: 'Conta', minWidth: 64}, {
            id: 'saldo',
            label: 'Saldo',
            minWidth: 120,
            align: 'left',
            format: (value) => "R$ " + value.toLocaleString('pt-BR'),
        }, {
            id: 'acoes',
            label: 'Ações',
            minWidth: 120,
            align: 'left',
        },
    ];
    return (<Box minWidth="sm" sx={{marginLeft: '240px', marginTop: '100px'}}>
        <TopBar title='Conta'/>
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Link component={RouterLink} underline="hover" to={paths.new_account}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{alignSelf: 'flex-end', justifySelf: 'flex-end'}}
                >Nova Conta</Button>
            </Link>
            <CustomTable columns={columns} rows={rows} rowId={'banco'}/>
        </Container>
        <Outlet/>
    </Box>)
}

export default BankAccount