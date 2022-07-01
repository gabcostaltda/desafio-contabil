import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BarChartIcon from '@mui/icons-material/BarChart';

const TotalBalanceCard = () => {

    return (
        <Card sx={{maxWidth: 345}} >
            <BarChartIcon fontSize="large"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Saldo Total
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    R$ 1500,00
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver Contas</Button>
            </CardActions>
        </Card>)
}

export default TotalBalanceCard