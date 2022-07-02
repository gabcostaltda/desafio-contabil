import CustomTable from "../structure/CustomTable";
import {Grid, Typography} from "@mui/material";
import DropDownMenu from "../structure/DropDownMenu";
import ModalForm from "../structure/ModalForm";
import {useState} from "react";

const AccountMovementsListing = () => {
    const columns = [
        {id: "data", label: "Data", minWidth: 32},
        {id: "movimento", label: "Movimento", minWidth: 32},
        {id: "origem", label: "Origem/Destino", minWidth: 64},
        {id: "valor", label: "Valor", minWidth: 64},
        {id: "saldo", label: "Saldo", minWidth: 64}
    ];
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        console.log("are you opening me?")
        setModalOpen(true);
    };

    const handleModalClose = () => {
        console.log("are you closing me?")
        setModalOpen(false);
    };
    const rows = [{data: "12/12/2022", movimento: "Entrada", valor: 1200.67, origem: "Bradesco 4566", saldo: 90000.56}]
    return (<Grid container spacing={2}>
        <Grid item xs={8}>
            <Typography variant="h5" style={{marginBottom: "16px"}}>Histórico de movimentações</Typography>
        </Grid>
        <Grid item xs={4}>
            <DropDownMenu title={"Nova Movimentação"} menuItems={["Entrada", "Saída", "Transferência"]}/>
        </Grid>
        <Grid item xs={12}>
            <CustomTable columns={columns} rows={rows}/>
        </Grid>
    </Grid>)
}

export default AccountMovementsListing;