import {AppBar, Typography} from "@mui/material";

const drawerWidth = 240;

const TopBar = ({title}) => (<AppBar position="fixed"
                                     sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>
    <Typography noWrap component="div" variant={"h6"} sx={{ml: `16px`}}>
        {title}
    </Typography>
</AppBar>)

export default TopBar