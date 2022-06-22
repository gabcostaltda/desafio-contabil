import {Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {AccountBalance, AttachMoney, Home, LocalShipping, Person, CurrencyExchange} from "@mui/icons-material";
import {Link} from "react-router-dom";
import paths from "../paths";

const MenuList = () => {
    const menuOptions = [
        {title: 'Início', icon: <Home/>, path: "/"},
        {title: 'Cliente', icon: <Person/>, path: paths.customer},
        {title: 'Fornecedor', icon: <LocalShipping/>, path: paths.provider},
        {title: 'Contas', icon: <AccountBalance/>, path: paths.account},
        {title: 'Movimentações', icon: <CurrencyExchange/>, path: paths.bank_transition},
        {title: 'Contas a pagar', icon: <AttachMoney/>, path: paths.bills},
    ];
    return <Box
        sx={{width: 250, overflow: 'auto', mt: '64px'}}
        role="presentation"
    >
        <List>
            {menuOptions.map((option, index) => (
                <ListItem component={Link} to={option.path} className='link' key={option.title}>
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    <ListItemText primary={option.title}/>
                </ListItem>
            ))}
        </List>
    </Box>;
}

export default MenuList