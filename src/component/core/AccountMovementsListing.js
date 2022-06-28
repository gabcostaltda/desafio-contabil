import CustomTable from "../structure/CustomTable";
import {Box, Container, Typography} from "@mui/material";

const AccountMovementsListing = () => {
    const columns = [
        {id: "data", label: "Data", minWidth: 32},
        {id: "movimento", label: "Movimento", minWidth: 32},
        {id: "origem", label: "Origem", minWidth: 64},
        {id: "valor", label: "Valor", minWidth: 64},
        {id: "saldo", label: "Saldo", minWidth: 64}
    ];

    const rows = [{data: "12/12/2022", movimento: "Entrada", valor: 1200.67, origem: "Bradesco 4566", saldo: 90000.56}]
    return (<Box minWidth="sm">
            <Typography variant="h5" style={{marginBottom: "16px"}}>Histórico de movimentações</Typography>
            <CustomTable columns={columns} rows={rows}/>
    </Box>)

}

export default AccountMovementsListing