import TopBar from "../component/structure/TopBar";
import {Container, FormControl, Grid, InputLabel} from "@mui/material";

const CriacaoDeEntrada = () => {
    return (<Container
        maxWidth="m"
        sx={{
            marginLeft: "240px",
            marginTop: "100px",
            display: "flex",
            alignItems: "baseline"
        }}>
        <TopBar title="Nova Entrada"/>
        <Grid container
              rowSpacing={4}
              columnSpacing={{xs: 1, sm: 2, md: 3}}
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline">
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="valor">Valor</InputLabel>
                </FormControl>
            </Grid>
        </Grid>
    </Container>)
}

export default CriacaoDeEntrada