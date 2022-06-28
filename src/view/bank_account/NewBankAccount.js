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
import {useEffect, useReducer, useState} from "react";
import TopBar from "../../component/structure/TopBar";
import BankAccountController from "../../controller/BankAccountController";
import {LoadingButton} from "@mui/lab";
import {useNavigate} from "react-router-dom";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    };
};
const NewBankAccount = () => {
    const [submitting, setSubmitting] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {
        banco: "",
        agencia: "",
        conta: "",
        digito: "",
        saldo: 0.0
    });
    const navigate = useNavigate();

    useEffect(() => {
        validateForm(formData)
            ? setIsFormValid(true)
            : setIsFormValid(false);
    }, [formData]);

    function validateForm(formData) {
        return formData.conta !== ""
            && formData.banco !== ""
            && formData.agencia !== "";
    }

    const formatAccount = ({conta, digito}) => digito !== "" ? `${conta}-${digito}` : conta;

    const formatBalance = ({saldo}) => saldo.replace(",", ".");

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmitting(true);
        setIsFormValid(true);

        try {

            let response = await BankAccountController.createBankAccount({
                ...formData,
                conta: formatAccount(formData),
                saldo: formatBalance(formData)
            });
            navigate("/contas", {replace: true, state: response});
        } catch (e) {
            alert("Deu ruim no servidor");
            setSubmitting(false);

        }
    }

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value
        });
    };

    return (<Container maxWidth="m"
                       sx={{
                           marginLeft: "240px",
                           marginTop: "100px",
                           display: "flex",
                           alignItems: "baseline"
                       }}>
        <TopBar title="Nova Conta"/>
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
                        label="Banco"
                        name="banco"
                        value={formData.banco}
                        onChange={handleChange}
                        required={true}
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
                    <Input id="agency"
                           name="agencia"
                           value={formData.agencia}
                           onChange={handleChange}
                           required={true}
                           aria-describedby="required-agency"/>
                    <FormHelperText id="required-agency">*Obrigatório</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl>
                    <InputLabel htmlFor="account">Conta</InputLabel>
                    <Input id="account"
                           name="conta"
                           value={formData.conta}
                           onChange={handleChange}
                           required={true}
                           aria-describedby="required-account"/>
                    <FormHelperText id="required-account">*Obrigatório</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={1}>
                <FormControl>
                    <InputLabel htmlFor="account">Dígito</InputLabel>
                    <Input id="account"
                           name="digito"
                           value={formData.digito}
                           onChange={handleChange}
                           aria-describedby="required-account"/>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl>
                    <InputLabel htmlFor="balance">Saldo Inicial</InputLabel>
                    <Input id="balance"
                           aria-describedby="balance"
                           name="saldo"
                           value={formData.saldo}
                           onChange={handleChange}
                           startAdornment={
                               <InputAdornment position="start">
                                   <Typography>R$: </Typography>
                               </InputAdornment>
                           }/>
                </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4} sx={{alignSelf: "flex-end"}}>
                <Stack direction="row"
                       spacing={2}
                       justifyContent="center">
                    <Button color="primary" variant="outlined">Voltar</Button>
                    <LoadingButton color="success"
                                   loading={submitting}
                                   variant="contained"
                                   loadingIndicator="Salvando..."
                                   disabled={!isFormValid}
                                   onClick={e => handleSubmit(e)}
                    >Criar Conta</LoadingButton>
                </Stack>
            </Grid>
        </Grid>
    </Container>)
}

export default NewBankAccount;