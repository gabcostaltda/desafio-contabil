import {Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CustomerCard = (path) => (<Card sx={{minWidth: 275}}>
    <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
            Cliente
        </Typography>
        <Link to={path} className="link">Expandir</Link>
    </CardContent>
</Card>)

export default CustomerCard