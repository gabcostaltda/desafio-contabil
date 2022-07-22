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
    Typography
} from "@mui/material";
import TopBar from "../component/structure/TopBar";
import type {SubmissionForm} from "../component/structure/SubmissionForm";
import {useForm} from 'react-hook-form';
import {useEffect, useState} from "react";
import textToCurrencyString from "../textToCurrencyString";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import EntradaController from "../controller/TransactionController";


export const NewAccountIncome: SubmissionForm = () => {
    const initialIncomeValueState = "0,00";
    const {
        register,
        handleSubmit,
        isDirty,
        isValid,
        formState: {errors},
        setValue
    } = useForm({
        defaultValues: {
            incomeValue: initialIncomeValueState,
            incomeDate: new Date(),
            incomeType: {}
        }
    });

    const [formState, setFormState] = useState({
        incomeValue: initialIncomeValueState,
        incomeDate: new Date(),
        incomeType: {}
    })

    const [incomeTypes, setIncomeTypes] = useState([{}]);
    useEffect(() => {
        (async () => {
            const incomeTypes = await EntradaController.listTransactionTypes();

            setIncomeTypes(incomeTypes);
            setFormState({...formState, incomeType: incomeTypes[0]});
        })();
    }, []);

    function onSubmit () {
        console.dir(formState)
        console.log("formRequest", formState);

        EntradaController.createIncome({})
    }

    function handleChange(changeProps) {
        setFormState({
            ...formState,
            ...changeProps
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
            <form onSubmit={handleSubmit(onSubmit, (errors, e) => console.error(errors, e))}>
                <Grid container
                      rowSpacing={4}
                      columnSpacing={2}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="baseline">
                    <Grid container columnSpacing={4} item xs={12} alignItems="baseline">
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
                                    onChange={(e) => handleChange({incomeValue: textToCurrencyString(e.target.value)})}
                                    required={true}/>
                                {errors.incomeValue
                                    && <FormHelperText error={Boolean(errors.incomeValue)}>
                                        Valor da entrada tem que ser maior que R$ 0,00
                                    </FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel id="income-type-label">Tipo de entrada</InputLabel>
                                <Select
                                    labelId="income-type-label"
                                    id="income-type"
                                    value={formState.incomeType === undefined
                                        ? ""
                                        : formState.incomeType.chave === undefined
                                            ? ""
                                            : formState.incomeType.chave}
                                    label="Tipo de entrada"
                                    onChange={(e) => handleChange({
                                        incomeType: incomeTypes.find(i => i.chave === e.target.value)
                                    })}
                                    name="incomeType"
                                >
                                    {incomeTypes && incomeTypes
                                        .map((incomeType) => <MenuItem key={incomeType.chave}
                                                                       value={incomeType.chave}>{incomeType.nome}
                                            </MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl>
                                <DesktopDatePicker
                                    name="incomeDate"
                                    label="Data da entrada"
                                    inputFormat="MM/dd/yyyy"
                                    value={formState.incomeDate}
                                    onChange={(e) => handleChange({incomeDate: e})}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* TODO bank accounts select
                    <Grid container item xs={12}>*/
                    }
                    {/*    <Grid item xs={4}>*/
                    }
                    {/*        <FormControl fullWidth>*/
                    }
                    {/*            <InputLabel id="demo-simple-select-label">Conta de destino</InputLabel>*/
                    }
                    {/*            <Select*/
                    }
                    {/*                labelId="demo-simple-select-label"*/
                    }
                    {/*                id="demo-simple-select"*/
                    }
                    {/*                value={formState.incomeType}*/
                    }
                    {/*                label="Conta de destino"*/
                    }
                    {/*                onChange={(e) => handleChange({incomeType: e.target.value})}*/
                    }
                    {/*            >*/
                    }
                    {/*                <MenuItem value={"debit"}>Débito</MenuItem>*/
                    }
                    {/*                <MenuItem value={"credit"}>Crédito</MenuItem>*/
                    }
                    {/*                <MenuItem value={"cash"}>Dinheiro</MenuItem>*/
                    }
                    {/*            </Select>*/
                    }
                    {/*        </FormControl>*/
                    }
                    {/*    </Grid>*/
                    }
                    {/*</Grid>*/
                    }
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