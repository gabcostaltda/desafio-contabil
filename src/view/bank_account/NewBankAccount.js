import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {useState} from "react";
import TopBar from "../../component/TopBar";

const NewBankAccount = () => {
    const [bank, setBank] = useState({});

    const handleChange = (event) => {
        setBank(event.target.value);
    };

    return (<Container minWidth="sm"
                       sx={{marginLeft: '240px', marginTop: '100px', display: 'flex', alignItems: 'baseline'}}>
        <TopBar title='Nova Conta'/>
        <Grid container
              rowSpacing={4}
              columnSpacing={{xs: 1, sm: 2, md: 3}}
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline">
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="bank">Banco</InputLabel>
                    <Select
                        labelId="bank"
                        id="bank-select"
                        value={bank}
                        label="Banco"
                        onChange={handleChange}
                    >
                        <MenuItem value={"BRADESCO"}>Bradesco</MenuItem>
                        <MenuItem value={"ITAU"}>Itaú</MenuItem>
                        <MenuItem value={"SANTANDER"}>Santander</MenuItem>
                    </Select>
                    <FormHelperText id="required-bank">*Obrigatório</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl>
                    <InputLabel htmlFor="agency">Agência</InputLabel>
                    <Input id="agency" aria-describedby="required-agency"/>
                    <FormHelperText id="required-agency">*Obrigatório</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl>
                    <InputLabel htmlFor="account">Conta</InputLabel>
                    <Input id="account" aria-describedby="required-account"/>
                    <FormHelperText id="required-account">*Obrigatório</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={1}>
                <FormControl>
                    <InputLabel htmlFor="account">Dígito</InputLabel>
                    <Input id="account" aria-describedby="required-account"/>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <InputLabel htmlFor="balance">Saldo Inicial</InputLabel>
                    <Input id="balance"
                           aria-describedby="balance"
                           startAdornment={
                               <InputAdornment position="start">
                                   <Typography>R$: </Typography>
                               </InputAdornment>
                           }/>
                </FormControl>
            </Grid>
        </Grid>
        <Stack direction="row" spacing={2} sx={{marginTop: '24px', marginRight: '280px', alignSelf: 'flex-end'}}>
            <Button color="primary" variant="outlined">Voltar</Button>
            <Button color="success" variant="contained">Criar Conta</Button>
        </Stack>
    </Container>)
}

export default NewBankAccount