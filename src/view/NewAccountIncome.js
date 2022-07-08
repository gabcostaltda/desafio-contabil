import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputAdornment,
    InputLabel, MenuItem, Select,
    Typography
} from "@mui/material";
import TopBar from "../component/structure/TopBar";
import type {SubmissionForm} from "../component/structure/SubmissionForm";
import {useForm} from 'react-hook-form';
import {useState} from "react";
import textToCurrencyString from "../textToCurrencyString";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

export const NewAccountIncome: SubmissionForm = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const initialIncomeValueState = "0,00";
    setValue("incomeValue", initialIncomeValueState);
    setValue("incomeDate", new Date())
    const [formState, setFormState] = useState({
        incomeValue: initialIncomeValueState,
        incomeDate: new Date(),
        incomeType: "cash"

    })

    const handleIncomeTypeChange = (e) => {
        setFormState({
            ...formState,
            incomeType: e.target.value
        })
    }

    const handleDateChange = (newDate) => {
        setFormState({
            ...formState,
            "incomeDate": newDate
        });

    };

    const onSubmit = ({incomeValue}) => {
        console.log(...formState)
        console.log("YOU SENT ME!", parseFloat(incomeValue.replace(",", ".")));
    }

    function handleChange(e) {
        setFormState({
            ...formState,
            "incomeValue": textToCurrencyString(e.target.value)
        })
    }

    return (<Container
            className="marginFromTopBar"
            maxWidth="m"
            sx={{
                marginLeft: "240px",
                display: "flex",
                flexGrowing: 1,
                alignItems: "baseline"
            }}>
            <TopBar title="Nova Entrada"/>
            <form onSubmit={handleSubmit(onSubmit, (errors, e) => console.log(errors, e))}>
                <Grid container
                      rowSpacing={4}
                      columnSpacing={2}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline">
                    <Grid container columnSpacing={4} item xs={12}  alignItems="baseline">
                        <Grid item xs={3}>
                            <FormControl>
                                <InputLabel error={Boolean(errors.incomeValue)}>
                                    Valor da Entrada
                                </InputLabel>
                                <Input
                                    {...register('incomeValue', {required: true, validate: value => value !== "0,00"})}
                                    error={Boolean(errors.incomeValue)}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Typography>R$ </Typography>
                                        </InputAdornment>
                                    }
                                    value={formState.incomeValue}
                                    onChange={handleChange}
                                    required={true}/>
                                {errors.incomeValue
                                    && <FormHelperText error={Boolean(errors.incomeValue)}>
                                        Valor da entrada tem que ser maior que R$ 0,00
                                    </FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo de entrada</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formState.incomeType}
                                    label="Tipo de entrada"
                                    onChange={handleIncomeTypeChange}
                                >
                                    <MenuItem value={"debit"}>Débito</MenuItem>
                                    <MenuItem value={"credit"}>Crédito</MenuItem>
                                    <MenuItem value={"cash"}>Dinheiro</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl>
                                <DesktopDatePicker
                                    label="Data da entrada"
                                    inputFormat="MM/dd/yyyy"
                                    value={formState.incomeDate}
                                    onChange={handleDateChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Conta de destino</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formState.incomeType}
                                    label="Conta de destino"
                                    onChange={handleIncomeTypeChange}
                                >
                                    <MenuItem value={"debit"}>Débito</MenuItem>
                                    <MenuItem value={"credit"}>Crédito</MenuItem>
                                    <MenuItem value={"cash"}>Dinheiro</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{justifyContent: "flex-end"}}>
                        <Grid item xs={3}>
                            <FormControl>
                                <Button type="reset" color="info" variant="outlined">
                                    Voltar
                                </Button>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl>
                                <Button type="submit" variant="contained" color="primary">
                                    Salvar
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}