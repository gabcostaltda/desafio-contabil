import {Card, CardContent, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const CustomerCard = ({path}) => (<Card sx={{minWidth: 275}}>
    <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Cliente
        </Typography>
        <Link to={path} component={RouterLink} underline="hover">Expandir</Link>
    </CardContent>
</Card>)

export default CustomerCard