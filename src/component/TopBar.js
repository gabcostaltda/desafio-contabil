import {AppBar, Toolbar, Typography} from "@mui/material";

const TopBar = ({title}) => (
    <AppBar position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Typography noWrap component="div" variant={"h6"} sx={{ml: `16px`}}>
                {title}
            </Typography>
        </Toolbar>
    </AppBar>)

export default TopBar